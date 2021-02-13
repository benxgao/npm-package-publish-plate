module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.spec.ts'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
