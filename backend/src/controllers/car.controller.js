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

        if(!Number.isInteger(carId) || carId <= 0) {
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

module.exports = {
    getAllCars,
    getCarById,
};