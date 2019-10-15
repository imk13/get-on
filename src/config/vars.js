const NODE_ENV = process.env.NODE_ENV || 'dev';
const envConfig = require('./env/' + NODE_ENV);
let config = {
    'env': NODE_ENV,
    'logs': NODE_ENV === 'production' ? 'combined' : 'dev',
};
console.log(envConfig);
// export extended config
module.exports = Object.assign(config, envConfig);