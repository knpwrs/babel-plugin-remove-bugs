# babel-plugin-remove-bugs

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
