const { Sequelize } = require("sequelize");
const { sequelize } = require("../db/db");

const Items = sequelize.define("items", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Items,
};
