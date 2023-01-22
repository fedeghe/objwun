## `find(array|literalObject, matcher function)`  
- **parameters**:
    - an array or a object literal
    - the matcher function
- **output**: the first matching result
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a function as second one

example
``` js
const ow = require("objwun");

const o = {ao: 1, bo: 2, co: 3, do: 4, eo: 5},
    a = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}],

    f = (e, k, oa) => e.a >= 3 || `${k}`.match(/^b/),

    o1 = ow.find(o, f),
    a1 = ow.find(a, f);

console.log(o1); // 2
console.log(a1); // { a: 3 }
```