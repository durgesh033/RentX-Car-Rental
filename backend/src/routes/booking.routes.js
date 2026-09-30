const express = require("express");

const bookingController = require("../controllers/booking.controller");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");
const { booking } = require("../db");

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Car rental booking endpoints
 */

const router = express.Router();

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     tags:
 *       - Bookings
 *     summary: Create a booking
 *     description: Creates a new booking for the authenticated user. The backend calculates the total price.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - carId
 *               - pickupDate
 *               - returnDate
 *             properties:
 *               carId:
 *                 type: integer
 *                 example: 1
 *               pickupDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-10-10T10:00:00Z
 *               returnDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-10-13T10:00:00Z
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Invalid booking data
 *       401:
 *         description: Authentication required
 *       404:
 *         description: Car not found
 *       409:
 *         description: Car unavailable or dates overlap
 */

router.post(
    "/",
    authMiddleware,
    bookingController.createBooking
);

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     tags:
 *       - Bookings
 *     summary: Get my bookings
 *     description: Returns bookings belonging to the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User bookings retrieved successfully
 *       401:
 *         description: Authentication required
 */

router.get(
    "/",
    authMiddleware,
    bookingController.getMyBookings
);

/**
 * @swagger
 * /api/bookings/admin:
 *   get:
 *     tags:
 *       - Bookings
 *     summary: Get all bookings
 *     description: Returns all bookings. Admin access required.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All bookings retrieved successfully
 *       401:
 *         description: Authentication required
 *       403:
 *         description: Admin access required
 */

router.get(
    "/admin",
    authMiddleware,
    adminMiddleware,
    bookingController.getAllBookings
);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     tags:
 *       - Bookings
 *     summary: Get a booking by ID
 *     description: Returns a booking if it belongs to the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Booking retrieved successfully
 *       400:
 *         description: Invalid booking ID
 *       401:
 *         description: Authentication required
 *       403:
 *         description: User is not authorized to access this booking
 *       404:
 *         description: Booking not found
 */

router.get(
    "/:id",
    authMiddleware,
    bookingController.getBookingById
);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     tags:
 *       - Bookings
 *     summary: Cancel a booking
 *     description: Cancels a booking belonging to the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Booking cancelled successfully
 *       400:
 *         description: Invalid booking ID
 *       401:
 *         description: Authentication required
 *       403:
 *         description: User is not authorized to cancel this booking
 *       404:
 *         description: Booking not found
 *       409:
 *         description: Booking cannot be cancelled
 */

router.delete(
    "/:id",
    authMiddleware,
    bookingController.cancelBooking
)

/**
 * @swagger
 * /api/bookings/{id}/status:
 *   patch:
 *     tags:
 *       - Bookings
 *     summary: Update booking status
 *     description: Updates a booking status. Admin access required.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum:
 *                   - PENDING
 *                   - CONFIRMED
 *                   - CANCELLED
 *                   - COMPLETED
 *                 example: CONFIRMED
 *     responses:
 *       200:
 *         description: Booking status updated successfully
 *       400:
 *         description: Invalid booking ID or status
 *       401:
 *         description: Authentication required
 *       403:
 *         description: Admin access required
 *       404:
 *         description: Booking not found
 *       409:
 *         description: Invalid booking status transition
 */

router.patch(
    "/:id/status",
    authMiddleware,
    adminMiddleware,
    bookingController.updateBookingStatus
);


module.exports = router;

