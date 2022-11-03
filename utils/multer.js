const multer = require('multer')
const path = require('path')

const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.mp3') {
            cb(new Error('Không hỗ trợ loại file trên'), false)
            return
        }
        cb(null, true)
    },
})

module.exports = upload
