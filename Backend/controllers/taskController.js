const Task = require("../models/Task");
const mongoose = require("mongoose");

const isValidTaskId = (id) => mongoose.Types.ObjectId.isValid(id);

const handleControllerError = (error, res) => {
  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Server error",
  });
};

// CREATE TASK
const createTask = async (req, res) => {

  try {

    const { title, description, status } = req.body;

    // Validation
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Create task
    const task = await Task.create({
      title,
      description,
      status,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });

  } catch (error) {

    handleControllerError(error, res);
  }
};

// GET ALL TASKS
const getTasks = async (req, res) => {

  try {

    // Find tasks of logged-in user
    const tasks = await Task.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });

  } catch (error) {

    handleControllerError(error, res);
  }
};

// UPDATE TASK
const updateTask = async (req, res) => {

  try {

    const { title, description, status } = req.body;

    if (!isValidTaskId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task id",
      });
    }

    // Find task
    const task = await Task.findById(req.params.id);

    // Check task exists
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    // Ownership validation
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    // Update task
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    const updatedTask = await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask,
    });

  } catch (error) {

    handleControllerError(error, res);
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {

  try {

    if (!isValidTaskId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task id",
      });
    }

    // Find task
    const task = await Task.findById(req.params.id);

    // Check task exists
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    // Ownership validation
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    // Delete task
    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });

  } catch (error) {

    handleControllerError(error, res);
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
