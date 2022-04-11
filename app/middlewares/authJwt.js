const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

verifyToken = (req, res, next) => {
  let bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    let token = bearerHeader.split(" ")[1];

    if (!token)
      return res.status(403).send({
        message: "No token provided",
      });

    jwt.verify(token, config.publicKEY, config.signOptions, (err, decoded) => {
      if (err)
        return res.status(401).send({
          message: "Unauthorized",
        });

      req.userId = decoded.id;
      next();
    });
  } else res.sendStatus(403);
};

const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
