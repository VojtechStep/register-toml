require('../');
const { config, probe } = require('./config.toml');

console.log(probe.nodes[1].replicas.length); // 2
