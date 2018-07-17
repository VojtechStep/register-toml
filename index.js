const addHook = require('pirates').addHook;
const toml = require('toml');
const toSource = require('tosource');

let revertHook = null;

const compileHook = (content, filename) => {
  const parsed = toml.parse(content);

  const code = `
const data = ${toSource(parsed)};
module.exports = exports = data;
Object.assign(exports, data);
`;

  return code;
}

const tryRevert = () => {
  if (revertHook) revertHook();
}

const register = () => {
  tryRevert();
  revertHook = addHook(compileHook, {
    exts: ['.toml'],
    ignoreNodeModules: false,
  });
  return tryRevert;
}

register();

exports = module.exports = (...args) => {
  return register(...args);
}

Object.assign(exports, { register });
