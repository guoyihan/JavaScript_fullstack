const Vue = require('vue');
const express = require('express');
const server = express();
const Render = require('vue-server-renderer');
const render = Render.createRenderer({

})
// export default
const createApp = require('./dist/server.bundle.js').default;
// createApp 指向 entry-server 那个函数，被webpack打包成 commonJS
// const App = require('App.vue')
server.get('*', (req, res) => {
  const app = createApp();
  let context = {}
  render.renderToString(app, context, (err, html) => {
    if (err) {
      console.log(err);
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(html);
  })
})
server.listen(8080, () => {
  console.log('server is running 8080');
})