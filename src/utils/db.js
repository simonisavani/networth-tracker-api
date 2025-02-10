const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres", 
  logging: false, 
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.error("Error connecting to database:", err));

module.exports = sequelize;
