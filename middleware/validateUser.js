const { body, validationResult } = require("express-validator");

const validateUser = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email"),

  body("age")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Age must be a positive integer"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
	success: false,
	error: {
	  message: "Validation failed",
	  statusCode: 400,
	  details: errors.array(),
      },
    });
    }

    next();
  },
];

module.exports = validateUser;
