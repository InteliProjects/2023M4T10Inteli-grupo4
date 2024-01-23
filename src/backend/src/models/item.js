const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Item;
