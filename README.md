# Node.js-Console-Font-Color

Demonstrates how to use colors in the console.

```js
const { Console } = require('./console.js');

const answer = await Console.input('How old are you?: ');
const age = Number.parseInt(answer);

if (age < 30)
    Console.info('Yay!');
else
    Console.error('bruh too elderly get a diaper');

Console.print('The %sgreen underlined%s color.'
    , Console.underscore+Console.green[0], Console.reset);
```
