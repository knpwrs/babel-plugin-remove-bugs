# babel-plugin-remove-bugs

[![Dependency Status](https://img.shields.io/david/knpwrs/babel-plugin-remove-bugs.svg)](https://david-dm.org/knpwrs/babel-plugin-remove-bugs)
[![devDependency Status](https://img.shields.io/david/dev/knpwrs/babel-plugin-remove-bugs.svg)](https://david-dm.org/knpwrs/babel-plugin-remove-bugs#info=devDependencies)
[![Greenkeeper badge](https://badges.greenkeeper.io/knpwrs/babel-plugin-remove-bugs.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/knpwrs/babel-plugin-remove-bugs.svg)](https://travis-ci.org/knpwrs/babel-plugin-remove-bugs)
[![Code Coverage](https://img.shields.io/coveralls/knpwrs/babel-plugin-remove-bugs.svg)](https://coveralls.io/github/knpwrs/babel-plugin-remove-bugs)
[![Npm Version](https://img.shields.io/npm/v/babel-plugin-remove-bugs.svg)](https://www.npmjs.com/package/babel-plugin-remove-bugs)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Badges](https://img.shields.io/badge/badges-8-orange.svg)](http://shields.io/)

A Babel plugin which removes all bugs from your code.

## Usage

First install and save this plugin as a development dependency:

```
npm i -D babel-plugin-remove-bugs
```

Or if you are using yarn:

```
yarn add --dev babel-plugin-remove-bugs
```

Then just add the plugin to your `.babelrc` file or equivalent Babel
configuration:

```json
{
  "plugins": ["remove-bugs"]
}
```

## Example

Consider the following code. Can you spot the bug?

```js
let counter = 0;
const output = document.getElementById('output');
const addOneButton = document.getElementById('add-one-button');

const render = () => {
  output.textContent = counter;
};

addOneButton.addEventListener('click', () => {
  counter += 0;
  render();
});

render();
```

`babel-plugin-remove-bugs` can! With this plugin enabled, Babel will output the
following:

```js
```

No more bugs!

## License

MIT
