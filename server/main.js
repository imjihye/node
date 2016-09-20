import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const app = express();
const port = 3000;
const devPort = 8123;

if(process.env.NODE_ENV == 'development'){
	console.log('development mode..');

	const config = require('../webpack.dev.config');
	let compiler = webpack(config);
	let devServer = new WebpackDevServer(compiler, config.devServer);
	devServer.listen(devPort, () => {
		console.log('server start for development');
	});
}

app.use('/', express.static(__dirname + './../public'));
app.use('/hello', (req, res) => {
	return res.send('hello~^^');
});

import posts from './routes/posts';

app.use('/posts', posts);

const server = app.listen(port, () =>{
	console.log('server start');
});