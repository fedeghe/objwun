## `getMapper(fromStart, fromEnd, toStart, toEnd)`  
- **parameters**:
    - domain start
    - domain end
    - codomain start
    - codomain end
- **output**: a mapping function that will accept one numeric value
- **throws**: if receives something that is not numeric or if `fromEnd-fromStart` is zero.

example

``` js  
const myMap = ow.getMapper(-10, 10, 50, 100);

console.log(myMap(0)) // 75
console.log(myMap(-20)) // 0
```