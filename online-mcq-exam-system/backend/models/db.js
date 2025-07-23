const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mcq_exam', 'root', '$23Malmi21@45', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('✅ MySQL connected'))
  .catch(err => console.error('MySQL connection failed:', err));

module.exports = sequelize;
