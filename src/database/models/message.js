const Sequelize = require('sequelize');
const database = require('../db');

const Message = database.define('Messages', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  }
})

module.exports = Message;