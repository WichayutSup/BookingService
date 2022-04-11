const authRoutes = require("./auth.routes");
const serviceRoutes = require("./service.routes");
const orderRoutes = require("./order.routes");
module.exports = function (app) {
  authRoutes(app);
  serviceRoutes(app);
  orderRoutes(app);
};
