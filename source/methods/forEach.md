## `forEach(array|literalObject, matcher function)`  
- **parameters**:
    - an array or a object literal
    - the iterator function
- **output**: depends on the iterator
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a function as second one

example

``` js  
let ra = 0, ro = 0;
const o = {ao: 1, bo: 2, co: 3, do: 4, eo: 5, fo: 6},
    a = [{k: 1}, {k: 2}, {k: 3}, {k: 4}, {k: 5}],

    fo = (e, key, oa) => ro += e,
    fa = (e, key, oa) => ra += e.k;

ow.forEach(a, fa);
ow.forEach(o, fo);

console.log(ro); // 21
console.log(ra); // 15
```