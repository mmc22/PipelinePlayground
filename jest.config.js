module.exports = {
    bail: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': require.resolve('ts-jest'),
    },
    // during tests keeps track of src code files ran and lines executed
    collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 70,
        functions: 70,
        statements: 70,
      },
    },
    globals: {
      'ts-jest': {
        tsconfig: {
          types: ['node', '@types/jest'],
        },
      },
    },
    modulePathIgnorePatterns: ['<rootDir>/dist/*'],
    coverageDirectory: '<rootDir>/coverage',
    setupFiles: ['./test/jest.setup.js'],
    coveragePathIgnorePatterns: ['node_modules', '<rootDir>/dist/*', 'coverage', 'random.ts'],
    testPathIgnorePatterns: ['node_modules', '<rootDir>/dist/*', 'coverage', 'random.ts'],
  };