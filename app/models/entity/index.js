const Sequelize = require("sequelize");
var initModels = require("./init-models");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DATABASE_DB,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    host: process.env.HOST_DB,
    dialect: "mysql",
    operatorsAliases: 0,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
var models = initModels(sequelize);
db.UserIdentity = models.UserIdentity;
db.Service = models.Service;
db.Booking = models.Booking;
module.exports = db;
