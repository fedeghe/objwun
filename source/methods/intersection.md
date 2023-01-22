## `intersection(array, array, ...)`  
- **parameters**:
    - or or more arrays
- **output**: an array that contains the intersection (only including primitives)
- **throws**: if one of the parameters is not an array

example
``` js
const ow = require("objwun");

const a = [1, 2, 3, 'yyy', () => {}],
    b = [1, 'x', 3, 'yyy', () => {}];

console.log(ow.intersection(a, b)) /// [ 1, 3, 'yyy' ]
```