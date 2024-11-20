## `isEmpty(any)`  
- **parameters**:
    - anything
- **output**: a boolean 
- **throws**: if undefined is passed

example

``` js  
console.log(ow.isEmpty(undefined)) // exception
console.log(ow.isEmpty(1)) // false
console.log(ow.isEmpty([])) // true
console.log(ow.isEmpty({})) // true
console.log(ow.isEmpty({a:1})) // false
console.log(ow.isEmpty('')) // true
```