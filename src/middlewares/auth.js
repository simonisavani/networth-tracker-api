const jwt = require("jsonwebtoken");

const verifyToken = async (request, h) => {
  try {
    const token = request.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;
    return h.continue;
  } catch (error) {
    return h.response({ message: "Unauthorized" }).code(401);
  }
};

module.exports = { verifyToken };
