const User = require('./user');
const Message = require('./message');

User.hasMany(Message, { as: 'messages', foreignKey: "userId" })
Message.belongsTo(User, { as: 'user', foreignKey: "userId" })

module.exports = { User, Message }
