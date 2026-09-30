const express = require("express");

const bookingController = require("../controllers/booking.controller");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");
const { booking } = require("../db");

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    bookingController.createBooking
);

router.get(
    "/",
    authMiddleware,
    bookingController.getMyBookings
);

router.get(
    "/admin",
    authMiddleware,
    adminMiddleware,
    bookingController.getAllBookings
);

router.get(
    "/:id",
    authMiddleware,
    bookingController.getBookingById
);

router.delete(
    "/:id",
    authMiddleware,
    bookingController.cancelBooking
)

router.patch(
    "/:id/status",
    authMiddleware,
    adminMiddleware,
    bookingController.updateBookingStatus
);


module.exports = router;

