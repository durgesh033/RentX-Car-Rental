const express = require("express");

const carController = require("../controllers/car.controller");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Car management endpoints
 */

/**
 * @swagger
 * /api/cars:
 *   get:
 *     tags:
 *       - Cars
 *     summary: Get all cars
 *     description: Returns all cars sorted by newest first.
 *     responses:
 *       200:
 *         description: List of cars
 */
router.get("/", carController.getAllCars);

/**
 * @swagger
 * /api/cars/{id}:
 *   get:
 *     tags:
 *       - Cars
 *     summary: Get a car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Car found
 *       400:
 *         description: Invalid car ID
 *       404:
 *         description: Car not found
 */
router.get("/:id", carController.getCarById);

/**
 * @swagger
 * /api/cars:
 *   post:
 *     tags:
 *       - Cars
 *     summary: Create a new car
 *     description: Creates a car. Admin access required.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - brand
 *               - pricePerDay
 *             properties:
 *               name:
 *                 type: string
 *                 example: M4 Competition
 *               brand:
 *                 type: string
 *                 example: BMW
 *               pricePerDay:
 *                 type: integer
 *                 example: 5000
 *               imageUrl:
 *                 type: string
 *                 nullable: true
 *                 example: https://example.com/bmw-m4.jpg
 *               available:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Car created successfully
 *       400:
 *         description: Invalid car data
 *       401:
 *         description: Authentication required
 *       403:
 *         description: Admin access required
 */
router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    carController.createCar
);

/**
 * @swagger
 * /api/cars/{id}:
 *   patch:
 *     tags:
 *       - Cars
 *     summary: Update a car
 *     description: Updates one or more car fields. Admin access required.
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
 *             properties:
 *               name:
 *                 type: string
 *                 example: M4 Competition
 *               brand:
 *                 type: string
 *                 example: BMW
 *               pricePerDay:
 *                 type: integer
 *                 example: 5500
 *               imageUrl:
 *                 type: string
 *                 nullable: true
 *                 example: https://example.com/bmw-m4.jpg
 *               available:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Car updated successfully
 *       400:
 *         description: Invalid car data
 *       401:
 *         description: Authentication required
 *       403:
 *         description: Admin access required
 *       404:
 *         description: Car not found
 */
router.patch(
    "/:id",
    authMiddleware,
    adminMiddleware,
    carController.updateCar
);

/**
 * @swagger
 * /api/cars/{id}:
 *   delete:
 *     tags:
 *       - Cars
 *     summary: Delete a car
 *     description: Deletes a car. Admin access required.
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
 *         description: Car deleted successfully
 *       400:
 *         description: Invalid car ID
 *       401:
 *         description: Authentication required
 *       403:
 *         description: Admin access required
 *       404:
 *         description: Car not found
 */
router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    carController.deleteCar
);

module.exports = router;