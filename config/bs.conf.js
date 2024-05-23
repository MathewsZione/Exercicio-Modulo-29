require('dotenv').config()

const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{ 
        app: `${process.env.ANDROID_APP_ID}`,
        device: 'Samsung Galaxy Note 20',
        os_version: '10.0',
        project: 'Meu primeiro projeto em Device Farm',
        build: 'EBAC CI Mobile',
        name: 'teste_login'
    }]
} : {
    capabilities: [{
        app: `${process.env.IOS_APP_ID}`,
        project: "Atividade Modulo 30 iOS BS",
        build: 'Modulo 30',
        name: 'ebac_test',
        device: 'iPhone 12 Pro',
        os_version: "14",
        'browserstack.debug': true
    }]
}

let bsConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    services: ['browserstack']
}

module.exports = { bsConf }