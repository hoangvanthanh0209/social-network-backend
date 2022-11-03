const mongoose = require('mongoose')

const userSchme = mongoose.Schema(
    {
        name: { type: 'String', required: true },
        avatar: {
            type: 'String',
            required: true,
        },
        avatarCloudinaryId: {
            type: 'String',
            required: true,
        },
        birthday: { type: 'Date', require: true },
        gender: { type: 'Number', require: true },
        email: { type: 'String', unique: true, required: true },
        username: { type: 'String', unique: true, required: true },
        password: { type: 'String', required: true },
    },
    { timestaps: true },
)

const User = mongoose.model('User', userSchme)

module.exports = User
