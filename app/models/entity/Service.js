const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Service', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    guid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "guid_uq"
    },
    name: {
      type: DataTypes.STRING(1023),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    picture: {
      type: DataTypes.STRING(2047),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(4047),
      allowNull: true
    },
    upsertBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    upsertDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'Service',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "guid_uq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "guid" },
        ]
      },
    ]
  });
};
