/// <binding ProjectOpened='config: production' />
"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HOST = process.env.HOST || "localhost";
var PORT = process.env.PORT || "8888";

loaders.push({
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract('style', 'css?sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded'),
	exclude: ['node_modules']
});

module.exports = {
	entry: [
		'webpack-dev-server/client?http://' + HOST + ':' + PORT,
		'webpack/hot/only-dev-server',
		'./src/index.jsx', // Your appʼs entry point
		'./src/styles/index.scss'
	],
	watch:true,
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	//externals: {
	//	"jquery": "jQuery"
	//},
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
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("style.css", {
			allChunks: true
		}),
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			files: {
				css: ['style.css'],
				js: [ "bundle.js"]
			}
		})
		//new CopyWebpackPlugin([
		//	{
		//		from: './src/images',
		//		to: './images'
		//	},
		//	{
		//		from: './src/styles/',
		//		to: './styles'
		//	},
		//	{
		//		from: './src/scripts/',
		//		to: './scripts'
		//	}
		//], {
		//	ignore: [
		//		// Doesn't copy any files with a txt extension
		//		//'*.txt'
		//	]
		//})
	]
};
