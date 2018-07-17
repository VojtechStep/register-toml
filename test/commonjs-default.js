require('../');
const configuration = require('./config.toml');

console.log(Object.keys(configuration)); // [ 'config', 'probe' ]
