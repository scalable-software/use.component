const path = require("path");

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    proxies: {
      "/src/": "/base/src/",
      "/test/": "/base/test/unit/",
      "/node_modules/": "/base/node_modules/",
    },
    files: [
      { pattern: "./importmap/inject.js" },
      { pattern: "./importmap/importmap.test.js" },
      { pattern: "./src/**/*.js", type: "module" },
      {
        pattern: "./node_modules/@scalable.software/**/dist/*.css",
      },
      {
        pattern: "./node_modules/@scalable.software/**/dist/*.html",
      },
      {
        pattern: "./node_modules/@scalable.software/**/dist/*.js",
        type: "module",
      },
      { pattern: "./test/unit/**/*.js", type: "module" },
    ],
    preprocessors: {
      "src/**/!(*.test).js": ["karma-coverage-istanbul-instrumenter"],
    },
    reporters: ["spec", "coverage-istanbul"],
    coverageIstanbulInstrumenter: {
      esModules: true,
    },
    coverageIstanbulReporter: {
      reports: ["html", "text", "lcovonly"],
      dir: path.join(__dirname, "coverage"),
      skipFilesWithNoCoverage: true,
    },
    browsers: ["ChromeHeadless"],
    singleRun: true,
    logLevel: config.LOG_DISABLED,
  });
};
