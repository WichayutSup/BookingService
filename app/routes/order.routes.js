// const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/servicePackage.controller");
const authJwt = require("../middlewares/authJwt");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "ACCESS_TOKEN, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/v1/orders", authJwt.verifyToken, controller.getAllBookingUserId);
};
