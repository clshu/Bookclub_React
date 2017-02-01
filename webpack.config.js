module.exports = {
	entry: "./app/index.js",

	output: {
		filename: "public/bundle.js",
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: /app/,
			loader: "babel",
			query: {
				presets: ["react", "es2015"],
				plugins: ["transform-object-rest-spread"]
			}
		}]
	},

	devtool: "eval-source-map"
};
