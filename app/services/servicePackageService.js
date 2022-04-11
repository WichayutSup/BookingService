const { nanoid } = require("nanoid");
const db = require("../models/entity");
const serviceModel = require("../models/serviceModel");
const userModel = require("../models/userModel");
const _Booking = db.Booking;
const _Service = db.Service;
exports.getListServicePackage = async () => {
  try {
    let _ServiceData = await _Service.findAll({
      attributes: [["guid", "_id"], "name", "price", "picture", "description"],
    });
    return _ServiceData;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getServicePackageById = async (rGUID) => {
  try {
    let _ServiceData = await _Service.findOne({
      where: {
        guid: rGUID,
      },

      attributes: [["guid", "_id"], "name", "price", "picture", "description"],
    });
    return _ServiceData;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.booking = async (rServiceGuid, rUserId) => {
  const t = await db.sequelize.transaction();
  try {
    let _ServiceData = await _Service.findOne({
      where: {
        guid: rServiceGuid,
      },
      attributes: ["id"],
    });
    console.log(_ServiceData);
    if (!_ServiceData)
      return { isSuccess: 0, message: "ServiceData Not found.", data: null };

    await _Booking.create(
      {
        ownerId: rUserId,
        serviceId: _ServiceData.id,
        createBy: rUserId,
        guid: nanoid(),
      },
      { transaction: t }
    );
    await t.commit();
    return { isSuccess: 1, message: "จองบริการเรียบร้อย" };
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};
exports.getAllBookingUserId = async (rUserId) => {
  try {
    let resModel = [];
    let [bookingServiceData, userInfoData] = await Promise.all([
      serviceModel.getAllBookingByUserId(rUserId),
      userModel.getUserInfoById(rUserId),
    ]);
    console.log("====", bookingServiceData);

    if (!bookingServiceData[0]) return resModel;
    await bookingServiceData.map((e) => {
      resModel.push({
        ...e,
        customer: {
          _id: userInfoData.userGUID,
          fullName: userInfoData.fullName,
          username: userInfoData.username,
        },
      });
    });
    return resModel;
  } catch (error) {
    console.log(error);
  }
};
