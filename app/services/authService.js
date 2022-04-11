const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { nanoid } = require("nanoid");
const db = require("../models/entity");
const _UserIdentitys = db.UserIdentity;
const config = require("../config/auth.config");
exports.register = async (data) => {
  const t = await db.sequelize.transaction();
  try {
    // throw new Error("BROKEN");
    await _UserIdentitys.create(
      {
        fullName: data.fullName,
        username: data.username,
        password: bcrypt.hashSync(data.password, 8),
        userGUID: nanoid(),
      },
      { transaction: t }
    );

    await t.commit();
  } catch (error) {
    await t.rollback();

    console.log(error);
  }
};
exports.login = async (data) => {
  try {
    const _user = await _UserIdentitys.findOne({
      where: {
        username: data.username,
      },
    });
    if (!_user)
      return { isSuccess: 0, accessToken: null, message: "User Not found." };

    let passwordIsValid = await bcrypt.compareSync(
      data.password,
      _user.password
    );
    if (!passwordIsValid)
      return { isSuccess: 0, accessToken: null, message: "Invalid Password." };

    let token = jwt.sign(
      { id: _user.id },
      config.privateKEY,
      config.signOptions
    );
    return { isSuccess: 1, accessToken: token, message: "Login success." };
  } catch (error) {
    console.log(error);
  }
};
