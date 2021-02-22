# Dependency Injection Library

## Installation

You will need the following packages installed locally,

- Node JS (8 or higher)
- Yarn

## Usage

```javascript
import {
    DependencyInjection,
    DependencyAware,
    Config
} from "dist/index";

// New dependency
class ExampleClass extends DependencyAware {
  test() {
    console.log('This is a test')
  }
}
// Core dependencies
const coreDefinitions = new Config().getDefinitions();

// New definitions
const definitions = {
  EXAMPLE: 'EXAMPLE'
}

export const DEFINITIONS = { ...definitions, ...coreDefinitions };

const DEPENDENCIES = {
 [DEFINITIONS.EXAMPLE]: ExampleClass,
};

// Create configuration object
const configuration = {
 DEFINITIONS,
 DEPENDENCIES,
};

// Initialise Dependency Injection 
const di = new DependencyInjection(configuration);
const example = di.get('EXAMPLE');
example.test();
// This is a test

```


## Testing
Tests are located in the tests folder an can be invoked by running `yarn test`.
