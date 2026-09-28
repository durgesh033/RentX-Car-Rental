const express = require("express");

const carController = require("../controllers/car.controller");

const router = express.Router();

router.get("/", carController.getAllCars);
router.get("/:id", carController.getCarById);
router.post("/", carController.createCar);
router.patch("/:id", carController.updateCar);

module.exports = router;