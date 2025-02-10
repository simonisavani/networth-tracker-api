const Joi = require("joi");
const { registerUser } = require("../controllers/userController");

module.exports = [
  {
    method: "POST",
    path: "/register",
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().min(3).required(),
          email: Joi.string().email().required(),
          password: Joi.string().min(6).required(),
        }),
      },
    },
    handler: registerUser,
  },
];
