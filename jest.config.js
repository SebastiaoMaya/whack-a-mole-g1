module.exports = {
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>src/__mocks__/fileMock.js",
  },
  modulePathIgnorePatterns: ["lib"],
  testPathIgnorePatterns: [
    "node_modules",
    "lib",
    "\\.cache",
    "<rootDir>.*/public",
    "__mocks__",
  ],
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost",
  setupFiles: [],
  setupFilesAfterEnv: ["<rootDir>/jest/setup-test-env.js"],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "lib"],
  coverageReporters: ["json", "lcovonly", "html"],
  coverageThreshold: {
    global: {
      branches: 22,
      functions: 15,
      lines: 22,
      statements: 22,
    },
  },
};
