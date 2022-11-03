const mongoose = require('mongoose')

const userSchme = mongoose.Schema(
    {
        name: { type: 'String', required: true },
        name2: { type: 'String', required: true },
        avatar: {
            type: 'String',
            required: true,
            default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        },
        avatarCloudinaryId: {
            type: 'String',
            required: true,
        },
        birthday: { type: 'Date' },
        gender: { type: 'Number' },
        email: { type: 'String', unique: true, required: true },
        username: { type: 'String', unique: true, required: true },
        password: { type: 'String', required: true },
    },
    { timestaps: true },
)

const User = mongoose.model('User', userSchme)

module.exports = User
