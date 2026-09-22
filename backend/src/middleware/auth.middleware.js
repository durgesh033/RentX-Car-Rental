const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            const error = new Error("Authorization token is required");
            error.statusCode = 401;
            throw error;
        }

        const [scheme, token] = authHeader.split(" ");

        if (scheme !== "Bearer" || !token) {
            const error = new Error("Invalid authorization format");
            error.statusCode = 401;
            throw error;
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        if (error.name === "JsonWebTokenError") {
            error.statusCode = 401;
            error.message = "Invalid token";
        }

        if (error.name === "TokenExpiredError") {
            error.statusCode = 401;
            error.message = "Token has expired";
        }

        next(error);
    }
};

module.exports = authMiddleware;