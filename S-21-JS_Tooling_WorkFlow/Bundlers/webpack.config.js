const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    bundle : "./index.js",
    app : "./app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};