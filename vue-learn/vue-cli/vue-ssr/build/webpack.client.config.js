const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
// {a: 1}
// {b: 1}
// {a: 1, b: 1}
module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/entry-client.js')
  }
});