const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const UserModel = sequelize.define('UserModel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = UserModel;
