const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: "You are authenticated",
        user: req.user,
    });
});

module.exports = router;