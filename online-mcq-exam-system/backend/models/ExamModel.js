const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const ExamModel = sequelize.define('ExamModel', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT
}, {
  tableName: 'exams',
  timestamps: false
});

module.exports = ExamModel;
