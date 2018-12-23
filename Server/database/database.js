var Sequelize = require('sequelize');
var sequelize = new Sequelize('SchoolApp', 'postgres', 'Daecepi', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

module.exports = sequelize;
