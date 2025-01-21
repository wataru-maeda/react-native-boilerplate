const glob = require('glob');

// find all source files that have tests
const findSourceFilesWithTests = () => {
  const testFiles = glob.sync('**/*.test.{js,jsx,ts,tsx}');
  const sourceFiles = testFiles.map(testFile => {
    return testFile.replace('.test', '').replace(/__tests__\//, '');
  });
  return sourceFiles;
};

/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    ...findSourceFilesWithTests(),
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/expo-env.d.ts',
    '!**/.expo/**',
  ],
};
