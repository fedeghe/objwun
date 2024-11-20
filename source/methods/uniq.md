## `uniq(array)`  
- **parameters**:
    - the array with repeated elements
- **output**: resulting array
- **throws**: if the first argument is not an array

example

``` js  
const a1 = [2, 1, 1, 2, 3, 1, {a:1}, {a:1}]
const a2 = [function a() {}, function b() {}, function a() {}, ]
console.log(ow.uniq(a1))
// [ 1, 2, 3, { a: 1 } ]
console.log(ow.uniq(a2))
// [ [Function: a], [Function: b] ]

```