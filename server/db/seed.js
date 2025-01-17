const { items } = require("./seedData.js");

const { sequelize } = require("./db");
const { Items } = require("../models/index.js");

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    // insert data
    await Promise.all(items.map((item) => Items.create(item)));
    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
