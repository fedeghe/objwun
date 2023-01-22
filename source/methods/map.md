## `map(array|literalObject, mappingFunction)`  
- **parameters**:
    - an array or a literal object
    - a mapping function
- **output**: an array or object literal depending on the input
- **throws**: if receives something that is not an array or object literal as first parameter, or not a string nor function as the second one

example
``` js
const ow = require("objwun");

const o = {name: 42, num: 10};
const a = [1, 2, 3, 4];

console.log(ow.map(o, e => e/2));
// { name: 21, num: 5 }

console.log(ow.map(a, e => e ** 2))
// [ 1, 4, 9, 16 ]
```