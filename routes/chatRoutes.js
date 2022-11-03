const express = require('express')
const {
    accessChat,
    fetchChats,
    createGroupChat,
    removeFromGroup,
    addToGroup,
    renameGroup,
} = require('../controllers/chatController')

const router = express.Router()

router.get('/', fetchChats)
router.post('/', accessChat)
router.post('/group', createGroupChat)
router.put('/rename', renameGroup)
router.put('/groupadd', addToGroup)
router.put('/groupremove', removeFromGroup)

module.exports = router
