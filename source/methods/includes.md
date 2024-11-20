## `includes(array|literalObject, any)`  
- **parameters**:
    - an array or a object literal
    - searched element
- **output**: a boolean 
- **throws**: if receives something that is not an array or object literal as first parameter

example

``` js  
const o = {a: 1, b: 2, c: 'xxx'},
    a = [1, 2, 3, 'yyy'];

console.log(ow.includes(o, 'xxx')) // true
console.log(ow.includes(a, 2)) // true
console.log(ow.includes(a, 22)) // false
```