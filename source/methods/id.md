## `id`  
This is **not a function** but an object with a particular `toString` method associated, thus need to be casted to a string.

example
``` js
const ow = require("objwun");

console.log(ow.id + "") // id_1
console.log(ow.id + "") // id_2
console.log(ow.id + ow.id) // id_3id_4
```