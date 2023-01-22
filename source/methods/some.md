## `some(array|literalObject, checking function )`  
- **parameters**:
    - the source array or literal object
    - a function to check a condition
- **output**: resulting boolean
- **throws**: if the first argument is not an array or a object literal; if the second argument is not a function

example
``` js
const ow = require("objwun");
const o = {
    a: 1, b: 2,
    c: 3, d: 4
},
a = [{n: 1}, {n: 2}];

console.log(ow.some(a, (e, k) => e.n > 1));
// true

console.log(ow.some(o, (e, k) => k === 'c' && e < 3));
// false

```