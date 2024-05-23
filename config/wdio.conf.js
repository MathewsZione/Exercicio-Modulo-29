const { bsConf } = require('./bs.conf');
const { localConf } = require('./local.conf');
const { sauceConf } = require('./sauce.conf');

require('dotenv').config();

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case 'local':
        default:
            localConf.services = ['appium'];
            localConf.appium = {
                command: 'appium',
                args: {
                    address: '127.0.0.1',
                    port: 4723,
                },
            };
            return localConf;
        case 'browserstack':
            return bsConf;
        case 'saucelabs':
            return sauceConf;
    }
}

exports.config = getConfig();