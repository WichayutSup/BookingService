const servicePackageService = require("../services/servicePackageService");

exports.getListServicePakage = async (req, res) => {
  try {
    let result = await servicePackageService.getListServicePackage();
    res.status("200").send(result);
  } catch (error) {
    res
      .status("500")
      .send({ message: "เกิดข้อผิดพลาดบางประการ กรุณาลองใหม่ภายหลัง" });
  }
};

exports.getServicePakageById = async (req, res) => {
  try {
    let guid = req.params.service_id;
    let result = await servicePackageService.getServicePackageById(guid);
    res.status("200").send(result);
  } catch (error) {
    res
      .status("500")
      .send({ message: "เกิดข้อผิดพลาดบางประการ กรุณาลองใหม่ภายหลัง" });
  }
};

exports.bookingService = async (req, res) => {
  try {
    let serviceGuid = req.params.service_id;
    let userId = req.userId;
    let result = await servicePackageService.booking(serviceGuid, userId);

    if (result.isSuccess) res.status("200").send(result);
    else res.status("400").send(result);
  } catch (error) {
    console.log(error);
    res
      .status("500")
      .send({ message: "เกิดข้อผิดพลาดบางประการ กรุณาลองใหม่ภายหลัง" });
  }
};

exports.getAllBookingUserId = async (req, res) => {
  try {
    let userId = req.userId;
    let result = await servicePackageService.getAllBookingUserId(userId);
    res.status("200").send(result);
  } catch (error) {
    console.log(error);
    res
      .status("500")
      .send({ message: "เกิดข้อผิดพลาดบางประการ กรุณาลองใหม่ภายหลัง" });
  }
};
