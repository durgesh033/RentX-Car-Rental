const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = require("../db");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config/env");

const registerUser = async ({ name, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await prisma.user.findUnique({
        where: {
            email: normalizedEmail,
        },
    });

    if (existingUser) {
        const error = new Error("Email is already registered");
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            name: name.trim(),
            email: normalizedEmail,
            password: hashedPassword,
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
        },
    });

    return user;
};

const loginUser = async ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
        where: {
            email: normalizedEmail,
        },
    });

    if (!user) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    const passwordMatches = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatches) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRES_IN,
        }
    );

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    };
};

module.exports = {
    registerUser,
    loginUser,
};