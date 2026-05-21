const express = require("express");

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const validateUser = require("../middleware/validateUser");

const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// GET single user
router.get("/:id", getUserById);

// POST create user
router.post("/", validateUser, createUser);

// PUT update user
router.put("/:id", validateUser, updateUser);

// DELETE user
router.delete("/:id", deleteUser);

module.exports = router;
