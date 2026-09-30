const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const prisma = require("./db");
const swaggerSpec = require("./config/swagger");

const carRoutes = require("./routes/car.routes");
const errorMiddleware = require("./middleware/error.middleware");
const userRoutes = require("./routes/user.routes");
const bookingRoutes = require("./routes/booking.routes");

const authRoutes = require("./routes/auth.routes");

const app = express();

// Global middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "RentX Backend is running 🚗",
    });
});

// Database health check
app.get("/api/health", async (req, res, next) => {
    try {
        await prisma.$queryRaw`SELECT 1`;

        res.status(200).json({
            message: "Database connected successfully 🚀",
        });
    } catch (error) {
        next(error);
    }
});

//Swagger 
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// Car routes
app.use("/api/cars", carRoutes);

// Auth routes
app.use("/api/auth", authRoutes);

// User routes
app.use("/api/users", userRoutes);

//Booking routes
app.use("/api/bookings", bookingRoutes);

// Error middleware
app.use(errorMiddleware);

module.exports = app;