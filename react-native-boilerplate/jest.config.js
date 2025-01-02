const glob = require('glob');

// find all source files that have tests
const findSourceFilesWithTests = () => {
  const testFiles = glob.sync('src/**/*.test.{js,jsx,ts,tsx}');
  const sourceFiles = testFiles.map(testFile => {
    return testFile.replace('.test', '').replace(/__tests__\//, '');
  });
  return sourceFiles;
};

/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    ...findSourceFilesWithTests(),
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
  coverageReporters: ['text-summary'],
  projects: [
    {
      preset: 'jest-expo/ios',
    },
    {
      preset: 'jest-expo/android',
    },
  ],
};
