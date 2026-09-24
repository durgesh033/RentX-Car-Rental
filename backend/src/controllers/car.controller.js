const carService = require("../services/car.service");

const getAllCars = async (req, res, next) => {
    try {
        const cars = await carService.getAllCars();

        res.status(200).json(cars);
    } catch (error) {
        next(error);
    }
};

const getCarById = async (req, res, next) => {
    try {
        const carId = Number(req.params.id);

        if (!Number.isInteger(carId) || carId <= 0) {
            const error = new Error("Invalid car ID");
            error.statusCode = 400;
            throw error;
        }

        const car = await carService.getCarById(carId);

        res.status(200).json({
            success: true,
            car,
        });
    } catch (error) {
        next(error);
    }
};

const createCar = async (req, res, next) => {
    try {
        const {
            name,
            brand,
            pricePerDay,
            imageUrl,
            available,
        } = req.body;

        if (!name || !brand || pricePerDay === undefined) {
            const error = new Error(
                "Name, brand, and pricePerDay are required"
            );

            error.statusCode = 400;
            throw error;
        }

        if (
            typeof name !== "string" ||
            typeof brand !== "string" ||
            name.trim().length === 0 ||
            brand.trim().length === 0
        ) {
            const error = new Error(
                "Name and brand must be non-empty strings"
            );

            error.statusCode = 400;
            throw error;
        }

        const parsedPrice = Number(pricePerDay);

        if (
            !Number.isInteger(parsedPrice) ||
            parsedPrice <= 0
        ) {
            const error = new Error(
                "pricePerDay must be a positive integer"
            );

            error.statusCode = 400;
            throw error;
        }

        if (
            imageUrl !== undefined &&
            imageUrl !== null &&
            typeof imageUrl !== "string"
        ) {
            const error = new Error(
                "imageUrl must be a string"
            );

            error.statusCode = 400;
            throw error;
        }

        if (
            available !== undefined &&
            typeof available !== "boolean"
        ) {
            const error = new Error(
                "available must be a boolean"
            );

            error.statusCode = 400;
            throw error;
        }

        const car = await carService.createCar({
            name,
            brand,
            pricePerDay: parsedPrice,
            imageUrl,
            available,
        });

        res.status(201).json({
            success: true,
            message: "Car created successfully",
            car,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllCars,
    getCarById,
    createCar,
};