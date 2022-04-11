const express = require("express");
const cors = require("cors");
const db = require("./app/models/entity/index");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
db.sequelize.sync();
app.set("etag", false);
app.use(morgan("dev"));
app.use(cors());
app.set("etag", false);
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  res.json({ message: "Welcome to BookingService." });
});
require("./app/routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
