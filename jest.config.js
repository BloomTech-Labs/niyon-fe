{
    "setupFiles" : ["<rootDir>/src/setupTests.js"],
    "testRegex" : "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!**/_tests__/**",
      "!**/*.{spec,test}.{js,jsx}",
      "!**/coverage/**",
      "!setUpTests.js",
    ],
    "coverageReporters": ["lcov", "json-summary", "text"],
    "moduleDirectories": ["node_modules", "src"]
  }