import type { InitialOptionsTsJest } from 'ts-jest';

const config: InitialOptionsTsJest = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['<rootDir>/lib/'],
  testRegex: '.*\\.spec\\.ts$',
  testEnvironment: 'node',
};
export default config;
