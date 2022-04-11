const db = require("../models/entity");
exports.getAllBookingByUserId = async (rUserId) => {
  try {
    let resModel = [];
    let result = await db.sequelize.query(
      `
          SELECT 
                    b.guid AS _id
                    ,s.guid AS service_guid
                    ,s.name AS service_name
                    ,s.price AS service_price
                    ,s.picture AS service_picture
                    ,s.description AS service_description
                    ,b.createDate AS createdAt
          FROM	    Booking b
          JOIN	    Service s 
                    ON s.id = b.serviceId
          WHERE	    b.ownerId = ${rUserId}
          ORDER BY  b.createDate desc;
          ;
          `,
      {
        replacements: { rUserId },
      }
    );
    if (!result[0]) return resModel;
    await result[0].map((e) => {
      resModel.push({
        _id: e._id,
        createdAt: e.createdAt,
        service: {
          _id: e.service_guid,
          name: e.service_name,
          price: e.service_price,
          picture: e.service_picture,
          description: e.service_description,
        },
      });
    });
    return resModel;
  } catch (error) {
    console.log(error);
  }
};
