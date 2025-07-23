const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const ExamModel = require('./ExamModel');

const QuestionModel = sequelize.define('QuestionModel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  exam_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ExamModel,
      key: 'id',
    },
  },
  question_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  option_a: DataTypes.TEXT,
  option_b: DataTypes.TEXT,
  option_c: DataTypes.TEXT,
  option_d: DataTypes.TEXT,
  correct_option: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
}, {
  tableName: 'questions',
  timestamps: false,
});

module.exports = QuestionModel;
