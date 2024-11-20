## `debounce(functionToBeDebounced, delayMilliseconds)`  
- **parameters**:
    - a function to be debounced
    - number of waiting millisecond
- **output**: the debounced function
- **throws**: if receives something that is not an function as first parameter, or a number as second one

example  

``` js  
const debounced = ow.debounce(function (a,b,c) {
    console.log(a,b,c)
}, 2e3);

debounced(1,2,3); // after 1 sec 1,2,3
```
