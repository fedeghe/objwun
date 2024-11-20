## `set(array|literalObject, string path, any value )`  
- **parameters**:
    - the source array or literal object
    - the target path to put the value
    - the element to be added
- **output**: resulting object 
- **throws**: if the first argument is not an array or a object literal; if the second argument is not a string; if the value id undefined

example

``` js  
const o = {
        a: 1, b: 2,
        c: 3, d: 4
    },
    a = [1, 2, 3, 4];

console.log(ow.set(o, 's.t', 1));
// { a: 1, b: 2, c: 3, d: 4, s: { t: 1 } }

console.log(ow.set(o, '0.t.a.d.r', 1));
// {"0": { t: { a: { d: {r: 1}}}}, a: 1, b: 2, c: 3, d: 4}

console.log(ow.set(o, 'a.d.r', 1));
// { a: { d: { r: 1 } }, b: 2, c: 3, d: 4 }
```