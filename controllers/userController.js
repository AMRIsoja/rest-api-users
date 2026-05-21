const users = require("../data/users");
const { v4: uuidv4 } = require("uuid");

// GET /users
const getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
};

// GET /users/:id
const getUserById = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      error: {
        message: "User not found",
        statusCode: 404,
    },
  });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

// POST /users
const createUser = (req, res) => {
  const { name, email, age } = req.body;

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).json({
    success: false,
    error: {
      message: "Email already exists",
      statusCode: 400,
    },
  });
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    age: age || null,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
};

// PUT /users/:id
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      error: {
        message: "User not found",
        statusCode: 404,
      },
    });
  }

  const emailExists = users.find(
    (user) => user.email === email && user.id !== id
  );

  if (emailExists) {
    return res.status(400).json({
      success: false,
      error: {
        message: "Email already exists",
        statusCode: 400,
      },
    });
  }

  user.name = name;
  user.email = email;
  user.age = age || null;

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
};

// DELETE /users/:id
const deleteUser = (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: {
        message: "User not found",
        statusCode: 404,
      },
    });
  }

  const deletedUser = users[userIndex];

  users.splice(userIndex, 1);

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser,
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
