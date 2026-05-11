const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

connectDB();

const app = express();


// Middleware
const allowedOrigin = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://project-mvp-mu.vercel.app",
      "https://project-mvp-git-main-jayraj-s-projects.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Test Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Server is running successfully"
  });
});

app.get("/api/protected", protect, (req, res) => {

  res.json({
    success: true,
    message: "Protected route accessed",
    user: req.user,
  });

});

// PORT
const PORT = process.env.PORT || 5000;


// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

