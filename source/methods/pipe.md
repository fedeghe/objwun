## `pipe(fn1, fn2, ... )`  
- **parameters**:
    - two or more functions 
- **output**: one single piped function 
- **throws**: if one of the argument is not a function

example

``` js  
console.log(ow.pipe(
    s => s.substring(0, 3),
    s => s.split('').reverse().join('')
)('hello'));
// leh
```