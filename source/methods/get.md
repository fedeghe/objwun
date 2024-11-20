## `get(array|literalObject, pathString, defaultValue)`  
- **parameters**:
    - an array or a object literal
    - the path of the needed element
    - a default value in case the search  goes wrong
- **output**: the found element o
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a string the second one

example

``` js  
const o = {
    a: 1, b: 2, c: {
        a:11, b:22, c:33, d: {
            a:111,b:222
        }
    }},
    res1 = ow.get(o, 'c.d.a'),
    res2 = ow.get(o, 'c.d.a.z', 'nope');

console.log(res1) // 111
console.log(res2) // nope
```