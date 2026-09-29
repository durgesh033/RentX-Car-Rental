const express = require("express");

const carController = require("../controllers/car.controller");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

const router = express.Router();

router.get("/", carController.getAllCars);

router.get("/:id", carController.getCarById);

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    carController.createCar
);

router.patch(
    "/:id",
    authMiddleware,
    adminMiddleware,
    carController.updateCar
);

router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    carController.deleteCar
);

module.exports = router;