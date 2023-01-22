## `keyBy(array, key string | key function)`  
- **parameters**:
    - an array
    - a string key, or a function returning it 
- **output**: an object literal
- **throws**: if receives something that is not an array or object literal as first parameter, or not a string nor function as the second one

example
``` js
const ow = require("objwun");

const a = [{
    name: 'a',
    num: 10
},{
    name: 's',
    num: 4
}];

console.log(ow.keyBy(a, 'name'))
// { a: { name: 'a', num: 10 }, s: { name: 's', num: 4 } }

console.log(ow.keyBy(a, f => f.name+'_'))
// { a_: { name: 'a', num: 10 }, s_: { name: 's', num: 4 } }
```