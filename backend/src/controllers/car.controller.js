const carService = require("../services/car.service");

const getAllCars = async (req, res, next) => {
    try {
        const cars = await carService.getAllCars();

        res.status(200).json(cars);
    } catch (error) {
        next(error);
    }   
};

module.exports = {
    getAllCars,
};