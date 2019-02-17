const endpoints = require('./endpoints');
const env = require('./env/');
const config = { ...env, endpoints };
module.exports = config;
