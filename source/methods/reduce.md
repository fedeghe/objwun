## `reduce(array|literalObject, reducer function, initial value, escapeFn )`  
this function is way faster than the native `Array.reduce`  
- **parameters**:
    - the array or literal to reduce over
    - the reducing function
    - initial value, optional, default {} if objLiteral given , [] if array
    - escapeFn (optional): if passed will be called on each cycle receiving same args as the reducer function; breaks the execution when returning false and last _acc_ value will be returned.
- **output**: resulting object 
- **throws**: if the first argument is not an array or a object literal; if the second argument is not a function

example  

``` js  
const o = {
        a: 1, b: 2,
        c: 3, d: 4
    },
    a = [1, 2, 3, 4];

console.log(ow.reduce(o,
    (acc, el, k) => {
        if (el % 2 === 0) acc[k] = el;
        return acc
    }
)); // { b: 2, d: 4 }

console.log(ow.reduce(a,
    (acc, el, k) => {
        if (el % 2 === 1) acc.push(el);
        return acc
    }
)); // [1, 3]

console.log(ow.reduce(a, (acc, el) =>{
    return acc * el
}, 1)); // 24
```