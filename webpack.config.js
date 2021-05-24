const CopyPlugin = require("copy-webpack-plugin");
/**
 * @type import('webpack').Configuration
 */
module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/about.js",
    about: "./src/js/index.js",
  },
  output: {
    filename: "js/[name].js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "" },
        { from: "./src/about.html", to: "" },
      ],
    }),
  ],
};
