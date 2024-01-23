const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Local = sequelize.define('local', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('Caminhão', 'Caminhão oficina', 'Almoxarifado'),
    allowNull: false,
    defaultValue: 'Caminhão',
  },
});

module.exports = Local;