## `remove(array|literalObject, selecting function )`  
> it mutates the first argument, this function is not pure
- **parameters**:
    - the array or literal to remove from
    - the function that selects the elements to be removed
- **output**: resulting object
- **throws**: if the first argument is not an array or a object literal; if the second argument is not a function

example

``` js  
const o = {
        a: 1, b: 2,
        c: 3, d: 4
    },
    a = [1, 2, 3, 4];

console.log(ow.remove(o, (el, k) => el % 2 === 0))
// { b: 2, d: 4 }
console.log(o)
// { a: 1, c: 3 }

console.log(ow.remove(a, (el, k) => el % 2 === 0))
// [ 2, 4 ]
console.log(a)
// [ 1, 3 ]

```