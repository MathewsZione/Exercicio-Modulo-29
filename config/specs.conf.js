require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? {
    specs: [
        './test/specs/login.spec.js',
    ]

} : {
    specs: [
        './test/specs/products.spec.js',
        './test/specs/search.spec.js',
        './test/specs/cart.spec.js'
    ]
}

module.exports = { specsConf }