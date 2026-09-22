const express = require("express");

const carController = require("../controllers/car.controller");

const router = express.Router();

router.get("/", carController.getAllCars);

module.exports = router;