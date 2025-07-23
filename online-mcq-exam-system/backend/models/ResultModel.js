const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const UserModel = require('./UserModel');
const ExamModel = require('./ExamModel');

const ResultModel = sequelize.define('ResultModel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserModel,
      key: 'id',
    },
  },
  exam_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ExamModel,
      key: 'id',
    },
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'results',
  timestamps: false,
});

module.exports = ResultModel;
