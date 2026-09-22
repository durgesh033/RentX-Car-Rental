const authService = require("../services/auth.service");

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            const error = new Error(
                "Name, email, and password are required"
            );

            error.statusCode = 400;
            throw error;
        }

        if (password.length < 8) {
            const error = new Error(
                "Password must contain at least 8 characters"
            );

            error.statusCode = 400;
            throw error;
        }

        const user = await authService.registerUser({
            name,
            email,
            password,
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
};