## `every(array|literalObject, checking function )`  
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
a = [1, 2, 3, 4];

console.log(ow.every(o, (el, k) => round(el, 10) === el))
// true

console.log(ow.every(a, (el, k) => el < 3))
// false

```