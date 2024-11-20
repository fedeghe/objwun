## `assign(literalObject, ...)`  
- **parameters**: zero or more object literals
- **output**: one object literal without references to arguments
- **throws**: whenever one argument passed is not an object literal


example

``` js  
const o1 = {a: 1, b: 2},
    o2 = {b: 3, c: 4},
    r = ow.assign(o1, o2); // {a:1, b:3, c: 4}

o2.c = 44;
console.log(r.c); // 4, not 44
console.log(o2.c); // 44
```