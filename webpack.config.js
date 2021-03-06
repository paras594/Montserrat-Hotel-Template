const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src"),
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	devtool: "source-map",
	devServer: {
		port: 5000,
		contentBase: path.resolve(__dirname, "build"),
		watchContentBase: true
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{
				// Include js, and jsx files.
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.s?[ac]ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "postcss-loader"
					},
					{
						loader: "resolve-url-loader"
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|svg|jpeg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8000, // Convert images < 8kb to base64 strings
							name: "images/[name].[ext]"
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css"
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/rooms.html",
			filename: "rooms.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/services.html",
			filename: "services.html"
		})
	]
};
