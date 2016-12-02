/// <binding ProjectOpened='config: production' />
"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var HOST = process.env.HOST || "localhost";
var PORT = process.env.PORT || "8888";


// local scss modules
//loaders.push({
//    test: /[\/\\]src[\/\\].*\.scss/,
//    loaders: [
//		'style?sourceMap',
//        'css',
//		//'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
//		'sass'
//    ]
//});

loaders.push({
	test: /[\/\\]src[\/\\].*\.scss/,
	loaders: [
		'style',
		'css',
		'sass'
		//'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
	]
});

// local css modules
loaders.push({
	test: /[\/\\]src[\/\\].*\.css/,
	loaders: [
		'style?sourceMap',
		'css'
		//'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
	]
});

loaders.push({
	test: /\.(otf|woff|woff2|eot|ttf|svg)$/,
	loader: 'url-loader?limit=100000'
});

//loaders.push({
//    test: /\.(png|gif|jpg)$/,
//    loader: 'file-loader?name=./images/[name].[ext]'
//});

//loaders.push({
//    test: /\.(jpe?g|png|gif|svg)$/i,
//    loaders: [
//		'file-loader?name=/images/[name].[ext]'
//		//'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
//    ]
//});




module.exports = {
	entry: [
		'webpack-dev-server/client?http://' + HOST + ':' + PORT,
		'webpack/hot/only-dev-server',
		'./src/index.jsx' // Your appʼs entry point
	],
	watch:true,
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'public'),
		//path: path.join('D:\\Website\\', 'ESport'),
		filename: 'bundle.js',
	},
	externals: {
		"jquery": "jQuery"
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: loaders
	},
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST,
		/*proxy: {
			"**" : "http://localhost:57772"
		}*/
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin({ multiStep: true }),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: './src/images',
				to: './images'
			},
			{
				from: './src/styles/',
				to: './styles'
			},
			{
				from: './src/scripts/',
				to: './scripts'
			}
		], {
			ignore: [
				// Doesn't copy any files with a txt extension
				'*.txt'
			]
		})
	]
};
