const mongoose = require('mongoose')

const postSchme = mongoose.Schema(
    {
        content: { type: 'String' },
        images: [{ type: 'String' }],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        usersTag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        isShowReact: { type: 'Boolean' },
        isShow: { type: 'Boolean' },
        isComment: { type: 'Boolean' },
        usersReact: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true },
)

const Post = mongoose.model('Post', postSchme)

module.exports = Post
