const cloudinary = require('cloudinary').v2
const moment = require('moment')

cloudinary.config({
    cloud_name: process.env.CLOUND_NAME,
    api_key: process.env.CLOUND_API_KEY,
    api_secret: process.env.CLOUND_API_SECRET,
})

const uploadImage = async (userFolder, folder, path) => {
    const time = moment(Date.now()).format('DD-MM-YYYY-HH:mm:ss')
    const name = `${folder.replace('/', '-')}-${time}`
    const options = {
        public_id: `social-network/${userFolder}/${folder}/${name}`,
    }
    return await cloudinary.uploader.upload(path, options)
}

const deleteImage = async (cloudinaryId) => {
    await cloudinary.uploader.destroy(cloudinaryId)
}

const uploadVideo = async (userFolder, folder, path) => {
    const time = moment(Date.now()).format('DD-MM-YYYY-HH:mm:ss')
    const name = `${folder.replace('/', '-')}-${time}`
    const options = {
        public_id: `social-network/${userFolder}/${folder}/${name}`,
        resource_type: 'video',
    }
    return await cloudinary.uploader.upload(path, options)
}

const deleteVideo = async (cloudinaryId) => {
    await cloudinary.uploader.destroy(cloudinaryId, { resource_type: 'video' })
}

module.exports = { uploadImage, deleteImage, uploadVideo, deleteVideo }
module.exports = cloudinary
