process.env.WP_DEVTOOL = false;

const path = require( 'path' );
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	...defaultConfig,
	entry: {
		"string-locator": path.resolve( process.cwd(), 'src/javascript', 'index.js' ),
	},
	output: {
		filename: '[name].js',
		path: path.resolve( process.cwd(), 'build/assets/js/' ),
	},
	module: {
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			}
		]
	},
	plugins: [
		new CopyPlugin([
			{
				from: path.resolve( process.cwd(), 'src/php' ),
				to: path.resolve( process.cwd(), 'build' )
			},
			{
				from: path.resolve( process.cwd(), 'docs' ),
				to: path.resolve( process.cwd(), 'build' )
			}
		]),
		new MiniCssExtractPlugin({
			filename: '../styles/[name].css',
		}),
	],
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		'__' : '@wordpress/i18n'
	}
};
