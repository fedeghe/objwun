## `findIndex(array|literalObject, matcher function)`  
- **parameters**:
    - an array or a object literal
    - the matcher function
- **output**: the first matching result
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a function as second one

example
``` js
const ow = require("objwun");

const o = {ao: 1, bo: 2, co: 3, do: 4, eo: 5},
    a = [{k: 1}, {k: 2}, {k: 3}, {k: 4}, {k: 5}],

    f = (e, key, oa) => e.k === 4 || e === 2,

    o1 = ow.findIndex(o, f),
    a1 = ow.findIndex(a, f);

console.log(o1); // bo
console.log(a1); // 3
```