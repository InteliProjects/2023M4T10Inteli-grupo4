const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Item = require('./item');
const Allocation = require('./allocation');
const Mechanic = require('./mechanic');

const Ticket = sequelize.define('Ticket', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.ENUM('RUNNING', 'ALERT', 'CLOSED'),
    allowNull: false,
    defaultValue: 'RUNNING',
  },
  mechanic_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Mechanic,
      key: 'id',
    },
  },
  last_allocation_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Allocation,
      key: 'id',
    },
  },
  allocation_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Allocation,
      key: 'id',
    },
  },
});

module.exports = Ticket;
