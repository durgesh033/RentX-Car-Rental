const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User account endpoints
 */

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get current authenticated user
 *     description: Returns the user information stored in the JWT.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Authenticated user information
 *       401:
 *         description: Authentication required
 */
router.get("/me", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: "You are authenticated",
        user: req.user,
    });
});

module.exports = router;