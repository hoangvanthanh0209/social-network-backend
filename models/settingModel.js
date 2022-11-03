const mongoose = require('mongoose')

const settingSchme = mongoose.Schema({
    isPrivate: { type: 'Boolean', required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

const Setting = mongoose.model('Setting', settingSchme)

module.exports = Setting
