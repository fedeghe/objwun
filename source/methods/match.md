## `match(p1, p2, sorting = false)`
- **parameters**:
    - the first comparison element
    - the second comparison element
    - optional boolean to ignore object elements position
- **output**: boolean

example  

``` js  
var o1 = {
        name: 'Jess',
        surname: 'Befof'
    },
    o2 = {
        surname: 'Befof',
        name: 'Jess'
    };
ow.match(o1, o2) // false
ow.match(o1, o2, true)  //true
```
