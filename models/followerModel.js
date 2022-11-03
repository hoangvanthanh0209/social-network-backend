const mongoose = require('mongoose')

const followerSchme = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true },
)

const Follower = mongoose.model('Follower', followerSchme)

module.exports = Follower
