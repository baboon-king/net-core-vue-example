const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
var htmlPages = glob.sync("./src/*.html").map((path) => {
  var chunk = path.replace(".html", "").replace("./src/", "");
  console.log("replace name ：" + chunk);
  return new HtmlWebpackPlugin({
    template: path,
    filename: `pages/${chunk}.html`,
    chunks: ["" + chunk, "vendor"],
    inject: true,
  });
});
/**
 * @type import('webpack').Configuration
 */
module.exports = {
  // watch: true,
  entry: {
    index: "./src/js/index.js",
    about: "./src/js/about.js",
  },
  output: {
    filename: "js/[name]/[name].js",
    chunkFilename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
  },
  // optimization: {
  //     splitChunks: {
  //         chunks: 'all',
  //         name: 'vendor'
  //     }
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     template: './src/index.html',
    //     filename: 'pages/index.html',
    //     chunks: [ 'index', 'vendor' ],
    //     inject: true
    // }),
    // new HtmlWebpackPlugin({
    //     template: './src/about.html',
    //     filename: 'pages/about.html',
    //     chunks: [ 'about', 'vendor' ],
    //     inject: true
    // }),
    // 清理dist目录
    // new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ].concat(htmlPages),
};
