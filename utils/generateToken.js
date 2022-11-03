const jwt = require('jsonwebtoken')

const generateaccessToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

const generaterefreshToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1y',
    })
}

module.exports = { generateaccessToken, generaterefreshToken }
