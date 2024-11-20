## `memoize(fn function)`  
- **parameters**:
    - the function that needs a to be memoized
- **output**: the memoized function (holds an extra `reset` attribute function to reset the memoized values)
- **throws**: if receives something that is not an a function

**warning**: for the moment this function works properly only when all parameters passed to the memoized function produce a unique value when given to `toString`. Thus `[par1, par2, ...].toString()` output should be uniquely obtainable passign exactly `[par1, par2, ...]`.

example  

``` js  
let calls = 0
const o = { num: 10 },
    fn = function(v) {
        calls++;
        return this.num * v;
    },
    mfn = ow.memoize(fn, o); // ctx is optional

console.log(mfn(3)); // 30
console.log(calls); // 1
console.log(mfn(3)); // 30
console.log(calls); // 1
mfn.reset()
console.log(mfn(3)); // 30
console.log(calls); // 2
```