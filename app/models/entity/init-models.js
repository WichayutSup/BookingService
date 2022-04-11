var DataTypes = require("sequelize").DataTypes;
var _Booking = require("./Booking");
var _Service = require("./Service");
var _UserIdentity = require("./UserIdentity");

function initModels(sequelize) {
  var Booking = _Booking(sequelize, DataTypes);
  var Service = _Service(sequelize, DataTypes);
  var UserIdentity = _UserIdentity(sequelize, DataTypes);

  Booking.belongsTo(Service, { as: "service", foreignKey: "serviceId"});
  Service.hasMany(Booking, { as: "Bookings", foreignKey: "serviceId"});
  Booking.belongsTo(UserIdentity, { as: "owner", foreignKey: "ownerId"});
  UserIdentity.hasMany(Booking, { as: "Bookings", foreignKey: "ownerId"});

  return {
    Booking,
    Service,
    UserIdentity,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
