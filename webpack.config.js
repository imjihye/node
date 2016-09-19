'use strict'

var config = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				loader: 'babel', 
				exclude:/node_modules/, 
				query: {
					cacheDirectory: true, 
					// presets:['react', 'es2015', 'stage-0']
					presets: ['react']
				}
			}
		]
	}
}

module.exports = config;