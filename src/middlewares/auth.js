// const jwt = require("jsonwebtoken");

// const verifyToken = async (request, h) => {
//   try {
//     const token = request.headers.authorization.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     request.user = decoded;
//     return h.continue;
//   } catch (error) {
//     return h.response({ message: "Unauthorized" }).code(401);
//   }
// };

// module.exports = { verifyToken };
const jwt = require("jsonwebtoken");

module.exports = async (request, h) => {
  const token = request.headers.authorization;

  if (!token) {
    return h.response({ error: "Token missing" }).code(401).takeover();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;
    return h.continue;
  } catch (error) {
    return h.response({ error: "Invalid token" }).code(401).takeover();
  }
};
