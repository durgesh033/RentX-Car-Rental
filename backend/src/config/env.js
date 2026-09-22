require("dotenv").config();

const PORT = process.env.PORT || 5000;

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in .env file");
}

module.exports = {
    PORT,
    JWT_SECRET,
    JWT_EXPIRES_IN,
};