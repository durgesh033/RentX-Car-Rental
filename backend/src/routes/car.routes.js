const express = require("express");

const carController = require("../controllers/car.controller");

const router = express.Router();

router.get("/", carController.getAllCars);
router.get("/:id", carController.getCarById);

module.exports = router;