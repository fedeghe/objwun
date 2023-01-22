## `fromEntries(array)`  
- **parameters**:
    - an array or pairs [key, value] to be used
- **output**: the resulting object using the key value found in the input array
- **throws**: if receives something that is not an array or any element in the array has size that is not 2  

example  
``` js 
const ow = require("objwun");

const o = [
    ['just': 'a'],
    ['idiot': 'example']
]
const res = ow.fromEntries(o)
console.log(res); // {just: "an", idiot: "example"}
```

