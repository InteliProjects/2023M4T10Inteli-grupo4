const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Item = require('./item');
const Local = require('./local');

const Allocation = sequelize.define('Allocation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  local_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Local,
      key: 'id',
    },
  },
  item_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Item,
      key: 'id',
    },
  },
});

module.exports = Allocation;
