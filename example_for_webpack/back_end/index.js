var require_node = require('require-node');

var koa = require('koa');
var convert = require('koa-connect');
var mount = require('koa-mount')
var serveStatic = require('koa-static')
var path = require('path')
var config = require('./config')

var app = new koa();
app.use(mount('/', serveStatic(path.join(__dirname, '../front_end'))));
app.use(convert(require_node(config.require_node)));
app.listen(3000, function() { console.log('access url: http://127.0.0.1:3000') });