const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
require("dotenv").config();
const Dotenv = require("dotenv-webpack");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

console.log(process.env.ENVIRONMENT);
module.exports = {
  mode: process.env.ENVIRONMENT || "production",
  entry: {
    bundle: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    port: 3000,
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      os: require.resolve("os-browserify/browser"),
      fs: require.resolve("fs"),
    },
  },
  devtool: "inline-source-map",

  plugins: [
    htmlPlugin,
    new NodePolyfillPlugin(),
    new Dotenv(),
    /*, new BundleAnalyzerPlugin()*/
  ],
};
