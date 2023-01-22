## `clone(literalObject)`  
- **parameters**: one object literal or array
- **output**: a cloned deep copy
- **throws**: if receives something that is not an object literal or an array

example
``` js
const ow = require("objwun");

const o1 = {a: 1, b: 2, c: {b: 3, c: 4}},
    o2 = ow.clone(o1);

o1.c = 44;
console.log(o2.c.c); // 4
console.log(o1.c); // 44
```