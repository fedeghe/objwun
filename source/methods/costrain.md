## `constrain(x Number, a Number, bNumber)`  
- **parameters**: 
    - x: the number to constrain  
    - a: bottom constrain  
    - b: top constrain  

- **throws**: if one of the parameter is not a number

example
``` js
const ow = require("objwun");

const c1 = ow.constrain(0, 1, 2}, // 1
    c2 = ow.constrain(3.3, 1, 2}, // 2
    c3 = ow.constrain(1.3, 1, 2}; // 1.3
```