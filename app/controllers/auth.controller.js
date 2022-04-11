var bcrypt = require("bcryptjs");
const db = require("../models/entity");
const authService = require("../services/authService.js");
const _UserIdentitys = db.UserIdentity;

exports.register = async (req, res) => {
  try {
    let reqData = {
      fullName: req.body.fullName,
      username: req.body.username,
      password: req.body.password,
    };
    await authService.register(reqData);
    res.status("200").send({ message: "ลงทะเบียนสำเร็จ", data: "" });
  } catch (error) {
    res
      .status("500")
      .send({ message: "เกิดข้อผิดพลาดบางประการ กรุณาลองใหม่ภายหลัง" });
  }
};
exports.login = async (req, res) => {
  try {
    let reqData = {
      username: req.body.username,
      password: req.body.password,
    };
    let result = await authService.login(reqData);
    if (result.isSuccess) res.status("200").send(result);
    else res.status("400").send(result);
  } catch (error) {
    res
      .status("500")
      .send({ message: "เกิดข้อผิดพลาดบางประการ กรุณาลองใหม่ภายหลัง" });
  }
};
