import express from 'express';

const app = express();
let port = 3000;

app.use('/', express.static(__dirname + '/../public'));
app.use('/hello', (req, res) => {
	return res.send('hello~');
});

import posts from './routes/posts';
app.use('/posts', posts);

const server = app.listen(port, () => {
	console.log('serer start! port is '+ port);
});