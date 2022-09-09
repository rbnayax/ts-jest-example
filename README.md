# ts-jest-example

If using ts-jest (29) + ESM, tests are failing when using third party modules that expose typings 

## Setup
1. `yarn`

## Reproduce failed tests
1. `yarn test`

```bash
 FAIL  lib/fn/fn.spec.ts
  ● Test suite failed to run

    lib/fn/fn.ts:1:21 - error TS7016: Could not find a declaration file for module 'colorette'. '/home/regev/WebstormProjects/ts-jest-example/node_modules/colorette/index.cjs' implicitly has an 'any' type.
      Try `npm i --save-dev @types/colorette` if it exists or add a new declaration (.d.ts) file containing `declare module 'colorette';`

    1 import {green} from "colorette";
                          ~~~~~~~~~~~

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.761 s
Ran all test suites.
(node:415750) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```

## Fix test by removing all references to `colorrete` in code
