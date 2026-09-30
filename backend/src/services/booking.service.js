const prisma = require("../db");

const createBooking = async ({
    userId,
    carId,
    pickupDate,
    returnDate,
}) => {
    // Check whether the car exist
    const car = await prisma.car.findUnique({
        where: { id: carId},
        select: {
            id: true,
            name: true,
            brand: true,
            pricePerDay: true,
            available: true,
        },
    });

    if (!car) {
        const error = new Error("Car not found");
        error.statusCode = 404;
        throw error;
    }

    // Check whether the car is available
    if (!car.available) {
        const error =new Error("Car is currently unavailavle");
        error.statusCode = 400;
        throw error;
    }

    //Check for overlapping active bookings
    const overlappingBooking = await prisma.booking.findFirst({
        where: {
            carId,
            status: {
                in: ["PENDING", "CONFIRMED"],
            },
            pickupDate: {
                lt: returnDate,
            },
            returnDate: {
                gt: pickupDate,
            },
        },
    });

    if (overlappingBooking) {
        const error = new Error("Car is already booked for the selected dates");
        error.statusCode = 400;
        throw error;
    }

    // Calculate rental duration
    const milisecondsPerDay = 1000 * 60 * 60 * 24;

    const rentalDays = Math.ceil(
        (returnDate - pickupDate) / milisecondsPerDay
    );

    // Calculate total price
    const totalPrice = rentalDays * car.pricePerDay;

    // Create the booking
    const booking = await prisma.booking.create({
        data: {
            userId,
            carId,
            pickupDate,
            returnDate,
            totalPrice,
        },
        include: {
            car: true,
        },
    });
    return booking;
};

// User retrieve own bookings
const getMyBookings = async (userId) => {
    const bookings = await prisma.booking.findMany({
        where: {
            userId,
        },
        include: {
            car: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return bookings;
}

module.exports = {
    createBooking,
    getMyBookings,
};