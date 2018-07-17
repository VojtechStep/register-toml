require('../');
import { config, probe } from './config.toml';

console.log(probe.nodes[1].replicas.length); // 2
