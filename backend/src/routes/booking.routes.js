const express = require("express");

const bookingController = require("../controllers/booking.controller");
const authMiddleware = require("../middleware/auth.middleware");

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
    "/:id",
    authMiddleware,
    bookingController.getBookingById
);

router.delete(
    "/:id",
    authMiddleware,
    bookingController.cancelBooking
)

module.exports = router;

