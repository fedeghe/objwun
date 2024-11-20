## `sortBy(array, sort key or function, sort direction )`  
- **parameters**:
    - the source array
    - sort key or function
    - sorting versus, default 1 (a negative number goes the other way)
- **output**: resulting ordered array
- **throws**: if the first argument is not an array; if the second argument is not a function or a string; if the third is not a number

example

``` js  
const a = [{n: 4.1}, {n: 0.05}, {n: 1.5}, {n: 3.3}];

console.log(ow.sortBy(a, 'n'));
// [ { n: 1.5 }, { n: 1.3 }, { n: 0.1 }, { n: 0.05 } ]

console.log(ow.sortBy(a, 'n', -1),);
// [ { n: 4.1 }, { n: 3.3 }, { n: 1.5 }, { n: 0.05 } ]

console.log(ow.sortBy(a, e => Math.cos(e.n)));
// [ { n: 3.3 }, { n: 4.1 }, { n: 1.5 }, { n: 0.05 } ]

```