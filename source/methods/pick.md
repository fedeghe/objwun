## `pick(literalObject, keyArray )`  
- **parameters**:
    - source literal object
    - array of keys
- **output**: resulting object 
- **throws**: if receives mixed array and object literal

example

``` js  
console.log(ow.pick({a:1, b:2, c:3}, ['a', 'c']));
// { a: 1, c: 3 }

console.log(ow.pick({a:1, b:2, c:3}, ['a']));
// { a: 1 }
```