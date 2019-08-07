// @ts-check
const { resolve } = require("path");

/**
 * @typedef {import('webpack/declarations/WebpackOptions').WebpackOptions} WebpackOptions
 */

/**
 * @type {WebpackOptions}
 */
const config = {
  mode: "production",
  entry: { boot: "./lib/entry.js" },
  output: {
    path: resolve(process.cwd(), "dist"),
    libraryTarget: "var",
    library: "[name]"
  },
  node: false,
  devtool: "source-map"
};

module.exports = config;
