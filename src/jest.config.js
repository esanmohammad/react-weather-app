const resolve = require("resolve");

module.exports = {
  roots: ["<rootDir>"],
  //setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: resolve.sync("jest-environment-jsdom", {
    basedir: require.resolve("jest"),
  }),
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.(css|scss|sass)$": "jest-transform-stub",
  },
};
