### OBJWUN

[![Coverage Status](https://coveralls.io/repos/github/fedeghe/objwun/badge.svg?branch=master)](https://coveralls.io/github/fedeghe/objwun?branch=master)

[![Build](https://travis-ci.org/fedeghe/objwun.svg?branch=master)](https://travis-ci.org/github/fedeghe/objwun?branch=master)


**OBJWUN - Isomorphic ES3 tool**

Utility functions:   

**assign** ~ **clone** ~ **debounce** ~ **filter** ~ **find** ~ **findIndex** ~ **forEach** ~ **get** ~ **id** ~ **includes** ~ **intersection** ~ **isEmpty** ~ **keyBy** ~ **map** ~ **merge** ~ **omit** ~ **pick** ~ **reduce** ~ **remove** ~ **set** ~ **some** ~ **sortBy** ~ **times** ~ **uniq** ~ **uniqBy**

 and  

**isArray** ~ **isBigint** ~ **isBoolean** ~ **isDefined** ~ **isFunction** ~ **isNumber** ~ **isObject** ~ **isPrimitive** ~ **isString** ~ **isSymbol** ~ **isUndefined**  

---
---
---

# API

## `assign(literalObject, ...)`  
- **parameters**: zero or more object literals
- **output**: one object literal without references to arguments
- **throws**: whenever one argument passed is not an object literal


example
``` js
const ow = require("objwun");

const o1 = {a: 1, b: 2},
    o2 = {b: 3, c: 4},
    r = ow.assign(o1, o2); // {a:1, b:3, c: 4}

o2.c = 44;
console.log(r.c); // 4, not 44
console.log(o2.c); // 44
```

---

## `clone(literalObject)`  
- **parameters**: one object literal or array
- **output**: a cloned deep copy
- **throws**: if receives something that is not an object literal or an array

example
``` js
const ow = require("objwun");

const o1 = {a: 1, b: 2, c: {b: 3, c: 4}},
    o2 = ow.clone(o1);

o1.c = 44;
console.log(o2.c.c); // 4
console.log(o1.c); // 44
```

---

## `debounce(functionToBeDebounced, delayMilliseconds)`  
- **parameters**:
    - a function to be debounced
    - number of waiting millisecond
- **output**: the debounced function
- **throws**: if receives something that is not an function as first parameter, or a number as second one

example
``` js
const ow = require("objwun");

const debounced = ow.debounce(function (a,b,c) {
    console.log(a,b,c)
}, 2e3);

debounced(1,2,3); // after 1 sec 1,2,3

```

---

## `filter(array|literalObject, filter Function)`  
- **parameters**:
    - an array or a object literal
    - the filter function
- **output**: the filtered array or object (with references)
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a function as second one

example
``` js
const ow = require("objwun");

const o = {a: 1, b: 2, c: 3, d: 4, e: 5},
    a = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}],

    f = (e, k, oa) => e % 2,

    o1 = ow.filter(o, f),
    a1 = ow.filter(a, f);

console.log(o1); // {a:1, c:3, e: 5}
console.log(a1); // [{a: 1}, {a: 3}, {a: 5}]
```

---

## `find(array|literalObject, matcher function)`  
- **parameters**:
    - an array or a object literal
    - the matcher function
- **output**: the first matching result
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a function as second one

example
``` js
const ow = require("objwun");

const o = {ao: 1, bo: 2, co: 3, do: 4, eo: 5},
    a = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}],

    f = (e, k, oa) => e.a >= 3 || `${k}`.match(/^b/),

    o1 = ow.find(o, f),
    a1 = ow.find(a, f);

console.log(o1); // 2
console.log(a1); // { a: 3 }
```

---

## `findIndex(array|literalObject, matcher function)`  
- **parameters**:
    - an array or a object literal
    - the matcher function
- **output**: the first matching result
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a function as second one

example
``` js
const ow = require("objwun");

const o = {ao: 1, bo: 2, co: 3, do: 4, eo: 5},
    a = [{k: 1}, {k: 2}, {k: 3}, {k: 4}, {k: 5}],

    f = (e, key, oa) => e.k === 4 || e === 2,

    o1 = ow.findIndex(o, f),
    a1 = ow.findIndex(a, f);

console.log(o1); // bo
console.log(a1); // 3
```
---

## `forEach(array|literalObject, matcher function)`  
- **parameters**:
    - an array or a object literal
    - the iterator function
- **output**: depends on the iterator
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a function as second one

example
``` js
const ow = require("objwun");

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

---

## `get(array|literalObject, pathString, defaultValue)`  
- **parameters**:
    - an array or a object literal
    - the path of the needed element
    - a default value in case the search  goes wrong
- **output**: the found element o
- **throws**: if receives something that is not an array or object literal as first parameter, or is not a string the second one

example
``` js
const ow = require("objwun");

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

---

## `id`  
This is **not a function** but an object with a particular `toString` method associated, thus need to be casted to a string.

example
``` js
const ow = require("objwun");

console.log(ow.id + "") // id_1
console.log(ow.id + "") // id_2
console.log(ow.id + ow.id) // id_3id_4
```

---

## `includes(array|literalObject, any)`  
- **parameters**:
    - an array or a object literal
    - searched element
- **output**: a boolean 
- **throws**: if receives something that is not an array or object literal as first parameter

example
``` js
const ow = require("objwun");

const o = {a: 1, b: 2, c: 'xxx'},
    a = [1, 2, 3, 'yyy'];

console.log(ow.includes(o, 'xxx')) // true
console.log(ow.includes(a, 2)) // true
console.log(ow.includes(a, 22)) // false
```

---

## `intersection(array, array, ...)`  
- **parameters**:
    - or or more arrays
- **output**: an array that contains the intersection (only including primitives)
- **throws**: if one of the parameters is not an array

example
``` js
const ow = require("objwun");

const a = [1, 2, 3, 'yyy', () => {}],
    b = [1, 'x', 3, 'yyy', () => {}];

console.log(ow.intersection(a, b)) /// [ 1, 3, 'yyy' ]
```

---

## `isEmpty(any)`  
- **parameters**:
    - anything
- **output**: a boolean 
- **throws**: if undefined is passed

example
``` js
const ow = require("objwun");

console.log(ow.isEmpty(undefined)) // exception
console.log(ow.isEmpty(1)) // false
console.log(ow.isEmpty([])) // true
console.log(ow.isEmpty({})) // true
console.log(ow.isEmpty({a:1})) // false
console.log(ow.isEmpty('')) // true
```

---

## `keyBy(array, key string | key function)`  
- **parameters**:
    - an array
    - a string key, or a function returning it 
- **output**: an object literal
- **throws**: if receives something that is not an array or object literal as first parameter, or not a string nor function as the second one

example
``` js
const ow = require("objwun");

const a = [{
    name: 'a',
    num: 10
},{
    name: 's',
    num: 4
}];

console.log(ow.keyBy(a, 'name'))
// { a: { name: 'a', num: 10 }, s: { name: 's', num: 4 } }

console.log(ow.keyBy(a, f => f.name+'_'))
// { a_: { name: 'a', num: 10 }, s_: { name: 's', num: 4 } }
```

---

## `map(array|literalObject, mappingFunction)`  
- **parameters**:
    - an array or a literal object
    - a mapping function
- **output**: an array or object literal depending on the input
- **throws**: if receives something that is not an array or object literal as first parameter, or not a string nor function as the second one

example
``` js
const ow = require("objwun");

const o = {name: 42, num: 10};
const a = [1, 2, 3, 4];

console.log(ow.map(o, e => e/2));
// { name: 21, num: 5 }

console.log(ow.keyBy(a, e => e ** 2))
// [ 1, 4, 9, 16 ]
```

---

## `merge(array|literalObject, ... )`  
- **parameters**:
    - one or more array or a literal object
- **output**: an object literal
- **throws**: if receives mixed array and object literal

example
``` js
const ow = require("objwun");

console.log(ow.merge({a: 1}, {b: 2}, {b: 3}));
// { a: 1, b: 3 }

console.log(ow.merge(["a", 1], ["b", 2], ["c", 3]));
// [ 'a', 1, 'b', 2, 'c', 3 ]
```

---

## `omit(literalObject, keyArray )`  
- **parameters**:
    - source literal object
    - array of keys
- **output**: resulting object 
- **throws**: if receives mixed array and object literal

example
``` js
const ow = require("objwun");

console.log(ow.omit({a:1, b:2, c:3}, ['a', 'c']));
// { b: 2 }

console.log(ow.omit({a:1, b:2, c:3}, ['a']));
// { b: 2, c: 3 }
```

---

## `pick(literalObject, keyArray )`  
- **parameters**:
    - source literal object
    - array of keys
- **output**: resulting object 
- **throws**: if receives mixed array and object literal

example
``` js
const ow = require("objwun");

console.log(ow.pick({a:1, b:2, c:3}, ['a', 'c']));
// { a: 1, c: 3 }

console.log(ow.pick({a:1, b:2, c:3}, ['a']));
// { a: 1 }
```

---

## `reduce(array|literalObject, reducer function, initial value )`  
- **parameters**:
    - the array or literal to reduce over
    - the reducing function
    - initial value, optional, default {} if objLiteral given , [] if array
- **output**: resulting object 
- **throws**: if the first argument is not an array or a object literal; if the second argument is not a function

example
``` js
const ow = require("objwun");
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

---

## `set(array|literalObject, string path, any value )`  
- **parameters**:
    - the source array or literal object
    - the target path to put the value
    - the element to be added
- **output**: resulting object 
- **throws**: if the first argument is not an array or a object literal; if the second argument is not a string; if the value id undefined

example
``` js
const ow = require("objwun");
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

---

## `some(array|literalObject, checking function )`  
- **parameters**:
    - the source array or literal object
    - a function to check a condition
- **output**: resulting boolean
- **throws**: if the first argument is not an array or a object literal; if the second argument is not a function

example
``` js
const ow = require("objwun");
const o = {
    a: 1, b: 2,
    c: 3, d: 4
},
a = [{n: 1}, {n: 2}];

console.log(ow.some(a, (e, k) => e.n > 1));
// true

console.log(ow.some(o, (e, k) => k === 'c' && e < 3));
// false

```

---

## `sortBy(array, sort key or function, sort direction )`  
- **parameters**:
    - the source array
    - sort key or function
    - sorting versus, default 1 (a negative number goes the other way)
- **output**: resulting ordered array
- **throws**: if the first argument is not an array; if the second argument is not a function or a string; if the third is not a number

example
``` js
const ow = require("objwun");
const a = [{n: 4.1}, {n: 0.05}, {n: 1.5}, {n: 3.3}];

console.log(ow.sortBy(a, 'n'));
// [ { n: 1.5 }, { n: 1.3 }, { n: 0.1 }, { n: 0.05 } ]

console.log(ow.sortBy(a, 'n', -1),);
// [ { n: 4.1 }, { n: 3.3 }, { n: 1.5 }, { n: 0.05 } ]

console.log(ow.sortBy(a, e => Math.cos(e.n)));
// [ { n: 3.3 }, { n: 4.1 }, { n: 1.5 }, { n: 0.05 } ]

```

---

## `times(integer, function, context)`  
- **parameters**:
    - the number of times the generator function should be called
    - the generating function (will receive the index starting from 0)
    - a context for the function invocation (default null)
- **output**: resulting array
- **throws**: if the first argument is not an number; if the second argument is not a function

example
``` js
const ow = require("objwun");
const o = {
    mult: a => a * 2,
    n: 4
}

console.log(ow.times(3, Math.random))
// [ 0.7279908812804159, 0.37899069671124463, 0.10983893613978579 ]

console.log(ow.times(3, i => i*i))
// [ 0, 1, 4 ]

console.log(ow.times(3, function(i) {
    return this.n * this.mult(i)
}, o))
// [ 0, 8, 16 ]

```

---

## `uniq(array)`  
- **parameters**:
    - the array with repeated elements
- **output**: resulting array
- **throws**: if the first argument is not an array

example
``` js
const ow = require("objwun");
const a1 = [2, 1, 1, 2, 3, 1, {a:1}, {a:1}]
const a2 = [function a() {}, function b() {}, function a() {}, ]
console.log(ow.uniq(a1))
// [ 1, 2, 3, { a: 1 } ]
console.log(ow.uniq(a2))
// [ [Function: a], [Function: b] ]

```

---

## `uniqBy(array, key of function)`  
- **parameters**:
    - the target array
    - a key string (all elements in the array should be objcet literals); or a function that will receive each element
- **output**: resulting array
- **throws**: if the first argument is not an array; if the second is a key (then all array elements must be objects) otherwise it must be a function returning a value

example
``` js
const ow = require("objwun");

console.log(ow.uniqBy([
    {a: 1, b: 1},
    {a: 1},
    {b: 3},
    {c: 4},
    {b: 77}
], 'a')); // [ { a: 1, b: 1 }, { b: 3 } ]

console.log(ow.uniqBy([
    2.34,
    3.55,
    2.33
], Math.floor)); // [ 2.34, 3.55 ]

```

---



last modified : 14/12/2021

༺ ᚗᚌ ༻ 
