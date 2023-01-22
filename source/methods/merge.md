
## `merge(array|literalObject, ... )`  
- **parameters**:
    - one or more array or a literal object
- **output**: an object literal
- **throws**: if receives mixed array and object literal

example
``` js
const ow = require("objwun");

console.log(ow.merge({a: 1}, {b: 2}, {b: 3}));
// { a: 1, b: 3 }

console.log(ow.merge(["a", 1], ["b", 2], ["c", 3]));
// [ 'a', 1, 'b', 2, 'c', 3 ]
```