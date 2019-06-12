const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.ts",
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist_externals")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  externals: {
    "lit-element": "lit-element"
  },
  module: {
    rules: [{ test: /\.ts?$/, use: ["ts-loader"], exclude: /node_modules/ }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve("./dist_externals/index.html"),
      template: "index-externals.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist_externals"),
    compress: true,
    port: 9000
  }
};
