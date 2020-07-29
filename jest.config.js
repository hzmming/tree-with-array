// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/', 'test'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Indicates whether each individual test should be reported during the run
  verbose: true
};
