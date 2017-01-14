module.exports = {
	entry: "./app/app.js",

	output: {
		filename: "pulic/bundle.js",
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: /app/,
			loader: "bable",
			query: {
				presets: ["react", "es2015"]
			}
		}]
	},

	devtool: "eval-source-map"
};