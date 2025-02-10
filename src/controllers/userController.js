const bcrypt = require("bcryptjs");
const User = require("../models/user");

const registerUser = async (request, h) => {
  try {
    const { name, email, password } = request.payload;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    return h.response({ message: "User created successfully", userId: user.id }).code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = { registerUser };
