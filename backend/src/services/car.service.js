const prisma = require("../db");

const getAllCars = async () => {
    const cars = await prisma.car.findMany({
        orderBy : {
            createdAt: "desc",
        },
    });

    return cars;
};

const getCarById = async (id) => {
    const car = await prisma.car.findUnique({
        where : {
            id,
        },
    });

    if (!car) {
        const error = new Error("Car not found");
        error.statusCode = 404;
        throw error;
    }
    return car;

};

module.exports = {
    getAllCars,
    getCarById,
};