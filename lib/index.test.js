const test = require('ava');
const babel = require('babel-core');
const removeBugs = require('../');

test('sanity check', (t) => {
  t.true(typeof removeBugs === 'function');
});

test('remove bugs', (t) => {
  const buggyCode = `
    document.body.addEventListener('click', (event) => {
      console.log(event);
    });
  `;
  const { code } = babel.transform(buggyCode, {
    plugins: [removeBugs],
  });
  t.is(code, '');
});
