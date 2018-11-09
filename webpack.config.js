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
]);

const productionConfig = merge([
  parts.extractCSS({
    use: "css-loader",
  }),
]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
]);

module.exports = mode => {
  if (mode === "production") {
    const thingy = merge(commonConfig, productionConfig, { mode });
    console.log(util.inspect(thingy, false, null, true));
    return merge(commonConfig, productionConfig, { mode });
  }
  return merge(commonConfig, developmentConfig, { mode });
};

// { plugins:
//    [ HtmlWebpackPlugin {
//        options:
//         { template: 'C:\\Users\\rizalz\\Documents\\WebDev\\Webpack\\survivejs\\webpack-demo\\node_modules\\html-webpack-plugin\\default_index.ejs',
//           templateParameters: [Function: templateParametersGenerator],
//           filename: 'index.html',
//           hash: false,
//           inject: true,
//           compile: true,
//           favicon: false,
//           minify: false,
//           cache: true,
//           showErrors: true,
//           chunks: 'all',
//           excludeChunks: [],
//           chunksSortMode: 'auto',
//           meta: {},
//           title: 'Webpack demo',
//           xhtml: false } } ],
//   module:
//    { rules:
//       [ { test: /\.css$/,
//           include: undefined,
//           exclude: undefined,
//           use: [ 'style-loader', 'css-loader' ] } ] },
//   mode: 'production' }
