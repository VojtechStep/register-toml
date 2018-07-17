# register-toml

Adds a register hook to `require()` or `import` .toml files. Not meant for production, in which case it's preferred to include the .toml in the deployed bundle, for example with [this Rollup.js plugin](https://github.com/VojtechStep/rollup-plugin-toml).

```toml
# config.toml

[config]
api = { hostname = "localhost", port = 3000 }

[probe]
[[probe.nodes]]
id = "api"

[[probe.nodes.replicas]]
address = "localhost:3001"

[[probe.nodes.replicas]]
address = "localhost:3002"

[[probe.nodes]]
id = "web"

[[probe.nodes.replicas]]
address = "localhost:4000"

[[probe.nodes.replicas]]
address = "localhost:4001"
```

```js
// index.js
require('register-toml');
// Default import
import configuration from './config.toml';

console.log(Object.keys(configuration)); // [ 'config', 'probe' ]

// Named import
import { config, probe } from './config.toml';

console.log(probe.nodes[1].replicas.length); // 2
```
# Installation

`yarn add -D register-toml`  
or  
`npm install --save-dev register-toml`

# Usage

```js
require('register-ts')
```

Or for `require()`ing .toml in the REPL:
```bash
node -r register-toml
```
