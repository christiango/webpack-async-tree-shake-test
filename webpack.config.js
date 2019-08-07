// @ts-check
const { resolve } = require("path");

/**
 * @typedef {import('webpack/declarations/WebpackOptions').WebpackOptions} WebpackOptions
 */

/**
 * @param {string} entryPath - The path to the entrypoint
 *  @param {string} outputSubfolder - The subfolder to place the output in
 * @returns {WebpackOptions}
 */
function createConfig(entryPath, outputSubfolder) {
  return {
    mode: "production",
    entry: { boot: entryPath },
    output: {
      path: resolve(process.cwd(), `dist/${outputSubfolder}`),
      libraryTarget: "var",
      library: "[name]"
    },
    node: false,
    devtool: "source-map"
  };
}

/**
 * @type {WebpackOptions[]}
 */
const configs = [
  createConfig("./lib/basicExample/entry.js", "basicExample"),
  createConfig("./lib/nestedFolders/entry.js", "nestedFolders"),
  createConfig(
    "./lib/nestedFoldersExportSideEffect/entry.js",
    "nestedFoldersExportSideEffect"
  ),
  createConfig(
    "./lib/nestedFoldersExportSideEffectUsedLazily/entry.js",
    "nestedFoldersExportSideEffectUsedLazily"
  )
];

module.exports = configs;
