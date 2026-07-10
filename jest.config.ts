import type { Config } from 'jest';

const config: Config = {
  // Use jsdom to simulate a browser environment
  testEnvironment: 'jest-environment-jsdom',

  // Run setup file after the test framework is installed
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Transform TS/TSX with babel-jest
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },

  // Resolve file extensions in order
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Path aliases + static asset mocks
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // Vite `?raw` imports return the file content as a string; stub in Jest.
    '\\?raw$': '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.ts',
  },

  // Only run test files in src/
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],

  // Coverage config
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!src/**/__mocks__/**',
  ],

  // Clear mocks between tests
  clearMocks: true,
};

export default config;
