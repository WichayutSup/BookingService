const fs = require("fs");
const path = require("path");

let i = "bookingservice";
let s = "wichayut";
let a = "http://bookingservice.co.th"; // Audience (Domain within which this token will live and function)

let publicKEY = fs.readFileSync(path.join(__dirname + "/public.key"), "utf8");
let privateKEY = fs.readFileSync(path.join(__dirname + "/private.key"), "utf8");
let expiresIn = 8640000; // 24 hours;

module.exports = {
  secret: "Wicha-key",
  signOptions: {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: expiresIn,
    algorithm: "RS256",
  },
  publicKEY,
  privateKEY,
};
