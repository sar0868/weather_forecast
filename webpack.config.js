const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  //   module: {
  //     module: {
  //       rules: [
  //         {
  //           test: /.s?css$/,
  //           use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  //         },
  //       ],
  //     },
  //     optimization: {
  //       minimizer: [
  //         // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
  //         // `...`,
  //         new CssMinimizerPlugin(),
  //       ],
  //     },
  //     plugins: [new MiniCssExtractPlugin()],
  //   },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
