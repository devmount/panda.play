const webpack = require('webpack')
const fs = require('fs')
const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					PACKAGE_VERSION: '"' + version + '"'
				}
			})
		],
		performance: {
			maxEntrypointSize: 1024000,
			maxAssetSize: 1024000
		},
		output: {
			filename: 'js/[name].js',
			chunkFilename: 'js/[name].bundle.js',
		},
	},
	productionSourceMap: false,
	publicPath: '',
}
