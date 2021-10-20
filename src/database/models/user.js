const Sequelize = require('sequelize');
const database = require('../db');

const User = database.define('Users', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true
  },
  github_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  avatar_url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = User;