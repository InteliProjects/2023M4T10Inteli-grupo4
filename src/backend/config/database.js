const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.ELEPHANTSQL_URL,{
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false }, // Enable SSL for ElephantSQL
  },
});

module.exports = sequelize;
