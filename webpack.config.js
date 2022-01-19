const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  plugins: [
    new HtmlWebpackPlugin({
      title: "finger"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      },

      {
        test: /\.css$/,
        use: "css-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 8080,
    host: "0.0.0.0"
  },
  target: "web",
  watch: true
};
