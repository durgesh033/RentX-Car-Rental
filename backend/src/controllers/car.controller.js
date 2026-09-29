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

const updateCar = async (req, res, next) => {
    try {
        const carId = Number(req.params.id);

        if (!Number.isInteger(carId) || carId <= 0) {
            const error = new Error("Invalid car ID");
            error.statusCode = 400;
            throw error;
        }

        const {
            name,
            brand,
            pricePerDay,
            imageUrl,
            available,
        } = req.body;

        const updateData = {};

        if (name !== undefined) {
            if (
                typeof name !== "string" ||
                name.trim().length === 0
            ) {
                const error = new Error(
                    "Name must be a non-empty string"
                );

                error.statusCode = 400;
                throw error;
            }

            updateData.name = name.trim();
        }

        if (brand !== undefined) {
            if (
                typeof brand !== "string" ||
                brand.trim().length === 0
            ) {
                const error = new Error(
                    "Brand must be a non-empty string"
                );

                error.statusCode = 400;
                throw error;
            }

            updateData.brand = brand.trim();
        }

        if (pricePerDay !== undefined) {
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

            updateData.pricePerDay = parsedPrice;
        }

        if (imageUrl !== undefined) {
            if (
                imageUrl !== null &&
                typeof imageUrl !== "string"
            ) {
                const error = new Error(
                    "imageUrl must be a string or null"
                );

                error.statusCode = 400;
                throw error;
            }

            updateData.imageUrl = imageUrl;
        }

        if (available !== undefined) {
            if (typeof available !== "boolean") {
                const error = new Error(
                    "available must be a boolean"
                );

                error.statusCode = 400;
                throw error;
            }

            updateData.available = available;
        }

        if (Object.keys(updateData).length === 0) {
            const error = new Error(
                "At least one field is required for update"
            );

            error.statusCode = 400;
            throw error;
        }

        const car = await carService.updateCar(
            carId,
            updateData
        );

        res.status(200).json({
            success: true,
            message: "Car updated successfully",
            car,
        });
    } catch (error) {
        next(error);
    }
};

const deleteCar = async (req, res, next) => {
    try{
        const carId = Number(req.params.id);

        if(!Number.isInteger(carId) || carId <= 0) {
            const error = new Error("Invalid car ID");
            error.statusCode = 400;
            throw error;
        }

        const car = await carService.deleteCar(carId);

        res.status(200).json({
            success: true,
            message: "Car deleted successfully",
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
    updateCar,
    deleteCar,
};