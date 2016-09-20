'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var devPort = 8123;

if (process.env.NODE_ENV == 'development') {
	console.log('development mode..');

	var config = require('../webpack.dev.config');
	var compiler = (0, _webpack2.default)(config);
	var devServer = new _webpackDevServer2.default(compiler, config.devServer);
	devServer.listen(devPort, function () {
		console.log('server start for development');
	});
}

app.use('/', _express2.default.static(__dirname + './../public'));
app.use('/hello', function (req, res) {
	return res.send('hello~^^');
});

app.use('/posts', _posts2.default);

var server = app.listen(port, function () {
	console.log('server start');
});