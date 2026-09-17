
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const prisma = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "RentX Backend is running 🚗"
    });
});

// Database connection test
app.get("/api/health", async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;

        res.json({
            message: "Database connected successfully 🚀"
        });
    } catch (error) {
        console.error("Database connection failed:", error);

        res.status(500).json({
            message: "Database connection failed"
        });
    }
});

// Get all cars
app.get("/api/cars", async (req, res) => {
    try {
        const cars = await prisma.car.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        res.json(cars);
    } catch (error) {
        console.error("Error fetching cars:", error);

        res.status(500).json({
            message: "Failed to fetch cars"
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`RentX server running on http://localhost:${PORT}`);
});