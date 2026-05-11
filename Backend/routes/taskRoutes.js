const express = require("express");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();


// Create Task Route
router.post("/", protect, createTask);
// Get Tasks Route
router.get("/", protect, getTasks);
// Update Task Route
router.put("/:id", protect, updateTask);
// Delete Task Route
router.delete("/:id", protect, deleteTask);

module.exports = router;