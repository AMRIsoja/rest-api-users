# REST API for User Data

A professional CRUD REST API built with Node.js and Express.js for managing user data.

## 🚀 Live Demo

API Base URL:

https://rest-api-users-maoz.onrender.com

## 📂 GitHub Repository

https://github.com/AMRIsoja/rest-api-users

---

# 📌 Features

- Create users
- Get all users
- Get single user by ID
- Update users
- Delete users
- Input validation
- Email validation
- Duplicate email prevention
- Proper HTTP status codes
- Centralized error handling
- Modular architecture

---

# 🛠 Tech Stack

- Node.js
- Express.js
- express-validator
- UUID
- CORS

---

# 📁 Project Structure

```bash
rest-api-users/
│── controllers/
│   └── userController.js
│── data/
│   └── users.js
│── middleware/
│   └── validateUser.js
│── routes/
│   └── users.js
│── app.js
│── package.json
│── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/AMRIsoja/rest-api-users.git
```

## Navigate into Project

```bash
cd rest-api-users
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Start Production Server

```bash
npm start
```

---

# 🌐 API Endpoints

## GET All Users

```http
GET /users
```

Example:

```bash
curl https://rest-api-users-maoz.onrender.com/users
```

---

## GET User By ID

```http
GET /users/:id
```

Example:

```bash
curl https://rest-api-users-maoz.onrender.com/users/1
```

---

## POST Create User

```http
POST /users
```

Example:

```bash
curl -X POST https://rest-api-users-maoz.onrender.com/users \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","age":30}'
```

---

## PUT Update User

```http
PUT /users/:id
```

Example:

```bash
curl -X PUT https://rest-api-users-maoz.onrender.com/users/1 \
-H "Content-Type: application/json" \
-d '{"name":"Updated User","email":"updated@example.com","age":35}'
```

---

## DELETE User

```http
DELETE /users/:id
```

Example:

```bash
curl -X DELETE https://rest-api-users-maoz.onrender.com/users/1
```

---

# ✅ Validation Rules

- Name is required
- Name must be at least 2 characters
- Email is required
- Email must be valid
- Age must be a positive integer
- Duplicate emails are not allowed

---

# 📡 HTTP Status Codes

| Status Code | Description |
|------|------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Validation Error |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# 🧪 Testing

The API was tested using:

- Postman
- curl
- Browser requests

---

# 🚀 Deployment

The application is deployed on Render.

Live URL:

https://rest-api-users-maoz.onrender.com

---

# 📚 Learning Outcomes

This project demonstrates understanding of:

- REST API architecture
- CRUD operations
- Express middleware
- Validation handling
- Error handling
- Modular backend structure
- HTTP methods and status codes
- Deployment workflow

---

# 👨‍💻 Author

Abdul Aziz Muhammad
