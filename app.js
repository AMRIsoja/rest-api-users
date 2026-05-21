const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "REST API for User Data is running successfully!",
    version: "1.0.0",
    endpoints: {
      getAllUsers: "GET /users",
      getUserById: "GET /users/:id",
      createUser: "POST /users",
      updateUser: "PUT /users/:id",
      deleteUser: "DELETE /users/:id",
    },
  });
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use("/users", userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: "Route not found",
      statusCode: 404,
    },
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    error: {
      message: "Internal Server Error",
      statusCode: 500,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
