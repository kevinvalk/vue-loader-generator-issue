// Includes
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.png$/i,
				type: "asset/resource",
				// BEGIN BREAKS VUE-LOADER
				generator: {
					filename: `images/[name][ext]`,
				},
				// END BREAKS VUE-LOADER
			},
		],
	},

	plugins: [new VueLoaderPlugin()],
};
