## `filter(array|literalObject, filter Function)`  
- **parameters**:
    - an array or a object literal
    - the filter function
- **output**: the filtered array or object (with references)
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a function as second one

example

``` js  
const o = {a: 1, b: 2, c: 3, d: 4, e: 5},
    a = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}],

    f = (e, k, oa) => e % 2,

    o1 = ow.filter(o, f),
    a1 = ow.filter(a, f);

console.log(o1); // {a:1, c:3, e: 5}
console.log(a1); // [{a: 1}, {a: 3}, {a: 5}]
```