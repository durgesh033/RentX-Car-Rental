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

// User can retrieve bookings if the bookings only belongs to them

const getBookingById = async (bookingId, userId) => {
    const booking = await prisma.booking.findUnique({
        where: {
            id: bookingId,
        },
        include: {
            car: true,
        },
    });

    if (!booking) {
        const error = new Error("Booking not found");
        error.statusCode = 404;
        throw error;
    }

    // User authentication
    if (booking.userId !== userId) {
        const error = new Error("You are not authorized to access the booking");
        error.statusCode = 403;
        throw error;
    }
    return booking;
};

const cancelBooking = async (bookingId, userId) => {
    const booking = await prisma.booking.findUnique({
        where: {
            id: bookingId,
        },
    });

    if (!booking) {
        const error = new Error("Booking not found");
        error.statusCode = 404;
        throw error;
    }

    //Only the booking owner can cancel it
    if (booking.userId !== userId) {
        const error = new Error("You are not authorized to cancel this booking");
        error.statusCode = 403;
        throw error;
    }

    // Cannot cancel an already cancelled booking
    if (booking.status === "CANCELLED") {
        const error = new Error("Booking is already cancelled");
        error.statusCode = 409;
        throw error;
    }

    // Cannot cancel a completed booking
    if (booking.status === "COMPLETED") {
        const error = new Error("Completed bookings cannot be cancelled");
        error.statusCode = 409;
        throw error;
    }

    const cancelledBooking = await prisma.booking.update({
        where: {
            id: bookingId,
        },
        data: {
            status: "CANCELLED",
        },
        include: {
            car: true,
        },
    });

    return cancelledBooking;
};

module.exports = {
    createBooking,
    getMyBookings,
    getBookingById,
    cancelBooking,
};