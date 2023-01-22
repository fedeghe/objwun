## `times(integer, function, context)`  
- **parameters**:
    - the number of times the generator function should be called
    - the generating function (will receive the index starting from 0)
    - a context for the function invocation (default null)
- **output**: resulting array
- **throws**: if the first argument is not an number; if the second argument is not a function

example
``` js
const ow = require("objwun");
const o = {
    mult: a => a * 2,
    n: 4
}

console.log(ow.times(3, Math.random))
// [ 0.7279908812804159, 0.37899069671124463, 0.10983893613978579 ]

console.log(ow.times(3, i => i*i))
// [ 0, 1, 4 ]

console.log(ow.times(3, function(i) {
    return this.n * this.mult(i)
}, o))
// [ 0, 8, 16 ]

```