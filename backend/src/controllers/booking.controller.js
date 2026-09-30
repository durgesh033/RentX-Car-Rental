const bookingService = require("../services/booking.service");

const createBooking = async (req, res, next) => {
    try{
        const { carId, pickupDate, returnDate } = req.body;

        // Require fields
        if (
            carId == undefined ||
            !pickupDate ||
            !returnDate
        ) {
            const error = new Error (
                "carId, pickupDate, and returnDate are required"
            );
            error.statusCode = 400;
            throw error;
        }

        // Validate car ID
        const parsedCarId = Number(carId);

        if(!Number.isInteger(parsedCarId) || parsedCarId <= 0) {
            const error = new Error("Invalid car ID");
            error.statusCode = 400;
            throw error;
        }

        // Validate data types

        if(
            typeof pickupDate !== "string" ||
            typeof returnDate !== "string"
        ) {
            const error = new Error("pickupDate and returnDate must be valid data strings");
            error.statusCode = 400;
            throw error;
        }

        // Covert strings into JavaScript Date Objects

        const parsedPickupDate = new Date(pickupDate);
        const parsedReturnDate = new Date(returnDate);

        // Check invalid dates
        if (
            Number.isNaN(parsedPickupDate.getTime()) ||
            Number.isNaN(parsedReturnDate.getTime())
        ) {
            const error = new Error("Invalid pickup or return date");
            error.statusCode = 400;
            throw error;
        }

        // Pickup cannot be in the past
        if (parsedPickupDate < new Date()) {
            const error = new Error(
                "Pickup date cannot be in the past"
            );
            error.statusCode = 400;
            throw error;
        }

        if (parsedReturnDate <= parsedPickupDate) {
            const error = new Error("Return date must be after pickup date");
            error.statusCode = 400;
            throw error;
        }

        // User ID comes from JWT
        const userId = req.user.userId;

        const booking = await bookingService.createBooking({
            userId,
            carId: parsedCarId,
            pickupDate: parsedPickupDate,
            returnDate: parsedReturnDate,
        });

        res.status(201).json({
            success: true,
            message: "Booking created succesfully",
            booking,
        });
    } catch (error) {
        next(error);
    }
};

const getMyBookings = async (req, res, next) => {
    try{
        const userId = req.user.userId;
        const bookings = await bookingService.getMyBookings(userId);

        res.status(200).json({
            success: true,
            count: bookings.length,
            bookings,
        });
    } catch(error) {
            next(error);
    }
};

// Booking belongs to user
const getBookingById = async (req, res, next) => {
    try{
        const bookingId = Number(req.params.id);

        if (!Number.isInteger(bookingId) || bookingId <= 0) {
            const error = new Error("Invalid booking ID");
            error.statusCode = 400;
            throw error;
        }

        const userId = req.user.userId;

        const booking = await bookingService.getBookingById(
            bookingId,
            userId
        );

        res.status(200).json({
            success: true,
            booking,
        });
    } catch (error) {
        next(error);
    }
};

//Cancel the booking
const cancelBooking = async (req, res, next) => {
    try {
        const bookingId = Number(req.params.id);

        if (!Number.isInteger(bookingId) || bookingId <= 0) {
            const error = new Error("Invalid booing ID");
            error.statusCode = 400;
            throw error;
        }
        
        const userId = req.user.userId;
        
        const booking = await bookingService.cancelBooking(
            bookingId,
            userId
        );

        res.status(200).json({
            success: true,
            message: "Booking cancelled succesfully",
            booking,
        });
    } catch (error) {
        next(error);
    }
};

const updateBookingStatus = async (req, res, next) => {
    try{
        const bookingId = Number(req.params.id);

        if(!Number.isInteger(bookingId) || bookingId <= 0) {
            const error = new Error("Invalid booking Id");
            error.statusCode = 400;
            throw error;
        } 

        const {status} = req.body;

        if (!status) {
            const error = new Error("Booking status is required");
            error.statusCode = 400;
            throw error;
        }

        if (typeof status !== "string"){
            const error = new Error("Booking status must be a string");
            error.statusCode = 400;
            throw error;
        }

        const booking = await bookingService.updateBookingStatus(
            bookingId,
            status
        );

        res.status(200).json({
            success: true,
            message: "Booking status updated succesfully",
            booking,
        });
    } catch (error) {
        next(error);
    }
};

const getAllBookings = async (req, res, next) => {
    try{
        const bookings = await bookingService.getAllBookings();

        res.status(200).json({
            success: true,
            count: bookings.length,
            bookings,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createBooking,
    getMyBookings,
    getBookingById,
    cancelBooking,
    updateBookingStatus,
    getAllBookings,
};