# Node.js-Console-Font-Color

Demonstrates how to use colors in the console.

```js
const { Console } = require('./console.js');

const age = Number.parseInt(Console.input('How old are you?: '));
  
if (age < 30)
    Console.info('Yay!');
else
    Console.error('bruh too elderly get a diaper');
    
Console.print('The %sgreen underlined%s color.'
    , Console.underscore+Console.green[0], Console.reset);
```
