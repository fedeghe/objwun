## `uniqBy(array, key of function)`  
- **parameters**:
    - the target array
    - a key string (all elements in the array should be objcet literals); or a function that will receive each element
- **output**: resulting array
- **throws**: if the first argument is not an array; if the second is a key (then all array elements must be objects) otherwise it must be a function returning a value

example
``` js
const ow = require("objwun");

console.log(ow.uniqBy([
    {a: 1, b: 1},
    {a: 1},
    {b: 3},
    {c: 4},
    {b: 77}
], 'a')); // [ { a: 1, b: 1 }, { b: 3 } ]

console.log(ow.uniqBy([
    2.34,
    3.55,
    2.33
], Math.floor)); // [ 2.34, 3.55 ]

```