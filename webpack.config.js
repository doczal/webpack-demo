const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const util = require('util')

const parts = require("./webpack.parts");

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo",
      }),
    ],
  },
  parts.loadCSS(),
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = mode => {
  if (mode === "production") {
    const thingy = merge(commonConfig, productionConfig, { mode });
    console.log(util.inspect(thingy, false, null, true));
    return merge(commonConfig, productionConfig, { mode });
  }
  return merge(commonConfig, developmentConfig, { mode });
};