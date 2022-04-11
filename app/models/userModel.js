const db = require("./entity");
exports.getUserInfoById = async (rUserId) => {
  try {
    let result = await db.sequelize.query(
      `
          SELECT 
                *
          FROM	UserIdentity
          WHERE	id = ${rUserId};
          `,
      {
        replacements: { rUserId },
      }
    );
    return result[0][0];
  } catch (error) {
    console.log(error);
  }
};
