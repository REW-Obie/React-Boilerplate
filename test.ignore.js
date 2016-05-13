const noop = () => null;
require.extensions['.css'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;

require('css-modules-require-hook/preset');