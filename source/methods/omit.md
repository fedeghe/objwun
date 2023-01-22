## `omit(literalObject, keyArray )`  
- **parameters**:
    - source literal object
    - array of keys
- **output**: resulting object 
- **throws**: if receives mixed array and object literal

example
``` js
const ow = require("objwun");

console.log(ow.omit({a:1, b:2, c:3}, ['a', 'c']));
// { b: 2 }

console.log(ow.omit({a:1, b:2, c:3}, ['a']));
// { b: 2, c: 3 }
```