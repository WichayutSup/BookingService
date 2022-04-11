const db = require("../models/entity");
const User = db.UserIdentity;

const checkDuplicateUsername = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "username duplicate",
        messageDisplay:
          "ชื่อผู้ใช้งานนี้มีการใช้งานแล้ว โปรดใช้ชื่อผู้ใช้งานอื่น",
      });
      return;
    }
    next();
  });
};

const checkSingUpData = (req, res, next) => {
  if (req.body.username && req.body.password && req.body.fullName) {
    next();
  } else {
    res.status(400).send({
      message: "SignUp Data is not valid",
    });
  }
};

const verifySignUp = {
  checkDuplicateUsername: checkDuplicateUsername,
  checkSingUpData,
};

module.exports = verifySignUp;
