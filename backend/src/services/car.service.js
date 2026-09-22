const prisma = require("../db");

const getAllCars = async () => {
    const cars = await prisma.car.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return cars;
};

module.exports = {
    getAllCars,
};