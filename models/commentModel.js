const mongoose = require('mongoose')

const commentSchme = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        },
        content: { type: 'String' },
        usersTag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        commentParentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    },
    { timestamps: true },
)

const Comment = mongoose.model('Comment', commentSchme)

module.exports = Comment
