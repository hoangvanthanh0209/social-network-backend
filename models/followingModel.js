const mongoose = require('mongoose')

const followingSchme = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true },
)

const Following = mongoose.model('Following', followingSchme)

module.exports = Following
