const path = require("path");

const devMode = process.env.NODE_ENV !== "production";


/** @type {import("webpack").Configuration} */
module.exports = {
  mode: process.env.NODE_ENV || "production",
  devtool: devMode ? "source-map" : false,
  entry: "./browser.js",
  target: "web",
  output: {
    library: { type: "umd", name: "mpecdsa" },
    path: path.resolve(__dirname, "./dist"),
    filename: "mpecdsa.min.js",
    assetModuleFilename: 'mpecdsa_bg[ext]',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            targets: ["> 0.5%", "not dead", "not ie 11"],
          },
        },
      },
    ],
  },
};