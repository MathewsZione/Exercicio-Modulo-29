require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? {
    specs: [
        './test/specs/login.spec.js'
    ]
} : {
    specs: [
        './test/specs/checkout.spec.js',
        './test/specs/cart.spec.js'
    ]
}

module.exports = { specsConf }