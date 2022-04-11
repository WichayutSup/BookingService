// const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const verifySignUp = require("../middlewares/verifySignUp");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "ACCESS_TOKEN, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/v1/auth/register",
    [verifySignUp.checkSingUpData, verifySignUp.checkDuplicateUsername],
    controller.register
  );

  app.post("/v1/auth/signin", controller.login);
};
