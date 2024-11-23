### OBJWUN

[![Coverage Status](https://coveralls.io/repos/github/fedeghe/objwun/badge.svg?branch=master)](https://coveralls.io/github/fedeghe/objwun?branch=master)



**OBJWUN - Isomorphic ES3 tool**

Utility functions:   

**assign** ~ **clone** ~ **debounce** ~ **every** ~ **filter** ~ **find** ~ **findIndex** ~ **forEach** ~ **fromEntries** ~ **get** ~ **id** ~ **includes** ~ **intersection** ~ **isEmpty** ~ **keyBy** ~ **map** ~ **memoize** ~ **merge** ~ **omit** ~ **pick** ~ **reduce** ~ **remove** ~ **set** ~ **some** ~ **sortBy** ~ **times** ~ **uniq** ~ **uniqBy**

 and  

**isArray** ~ **isBigint** ~ **isBoolean** ~ **isDefined** ~ **isFunction** ~ **isNumber** ~ **isObject** ~ **isPrimitive** ~ **isString** ~ **isSymbol** ~ **isUndefined**  

additional utilities    

**constrain** ~ **getMapper**  

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
const o1 = {a: 1, b: 2, c: {b: 3, c: 4}},
    o2 = ow.clone(o1);

o1.c = 44;
console.log(o2.c.c); // 4
console.log(o1.c); // 44
```

---

## `constrain(x Number, a Number, bNumber)`  
- **parameters**: 
    - x: the number to constrain  
    - a: bottom constrain  
    - b: top constrain  

- **throws**: if one of the parameter is not a number

example

``` js  
const c1 = ow.constrain(0, 1, 2}, // 1
    c2 = ow.constrain(3.3, 1, 2}, // 2
    c3 = ow.constrain(1.3, 1, 2}; // 1.3
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
const debounced = ow.debounce(function (a,b,c) {
    console.log(a,b,c)
}, 2e3);

debounced(1,2,3); // after 1 sec 1,2,3
```


---

## `every(array|literalObject, checking function )`  
- **parameters**:
    - the source array or literal object
    - a function to check a condition
- **output**: resulting boolean
- **throws**: if the first argument is not an array or a object literal; if the second argument is not a function

example

``` js  
const o = {
    a: 1, b: 2,
    c: 3, d: 4
},
a = [1, 2, 3, 4];

console.log(ow.every(o, (el, k) => round(el, 10) === el))
// true

console.log(ow.every(a, (el, k) => el < 3))
// false

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

## `fromEntries(array)`  
- **parameters**:
    - an array or pairs [key, value] to be used
- **output**: the resulting object using the key value found in the input array
- **throws**: if receives something that is not an array or any element in the array has size that is not 2  

example  

``` js 
const o = [
    ['just': 'a'],
    ['idiot': 'example']
]
const res = ow.fromEntries(o)
console.log(res); // {just: "an", idiot: "example"}
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

## `getMapper(fromStart, fromEnd, toStart, toEnd)`  
- **parameters**:
    - domain start
    - domain end
    - codomain start
    - codomain end
- **output**: a mapping function that will accept one numeric value
- **throws**: if receives something that is not numeric or if `fromEnd-fromStart` is zero.

example

``` js  
const myMap = ow.getMapper(-10, 10, 50, 100);

console.log(myMap(0)) // 75
console.log(myMap(-20)) // 0
```

---

## `id`  
This is **not a function** but an object with a particular `toString` method associated, thus need to be casted to a string.

example

``` js  
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
const o = {name: 42, num: 10};
const a = [1, 2, 3, 4];

console.log(ow.map(o, e => e/2));
// { name: 21, num: 5 }

console.log(ow.map(a, e => e ** 2))
// [ 1, 4, 9, 16 ]
```

---

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


---

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

---


## `merge(array|literalObject, ... )`  
- **parameters**:
    - one or more array or a literal object
- **output**: an object literal
- **throws**: if receives mixed array and object literal

example

``` js  
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
console.log(ow.pick({a:1, b:2, c:3}, ['a', 'c']));
// { a: 1, c: 3 }

console.log(ow.pick({a:1, b:2, c:3}, ['a']));
// { a: 1 }
```

---

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

---

## `remove(array|literalObject, selecting function )`  
> it mutates the first argument, this function is not pure
- **parameters**:
    - the array or literal to remove from
    - the function that selects the elements to be removed
- **output**: resulting object
- **throws**: if the first argument is not an array or a object literal; if the second argument is not a function

example

``` js  
const o = {
        a: 1, b: 2,
        c: 3, d: 4
    },
    a = [1, 2, 3, 4];

console.log(ow.remove(o, (el, k) => el % 2 === 0))
// { b: 2, d: 4 }
console.log(o)
// { a: 1, c: 3 }

console.log(ow.remove(a, (el, k) => el % 2 === 0))
// [ 2, 4 ]
console.log(a)
// [ 1, 3 ]

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
const a = [{n: 4.1}, {n: 0.05}, {n: 1.5}, {n: 3.3}];

console.log(ow.sortBy(a, 'n'));
// [ { n: 1.5 }, { n: 1.3 }, { n: 0.1 }, { n: 0.05 } ]

console.log(ow.sortBy(a, 'n', -1),);
// [ { n: 4.1 }, { n: 3.3 }, { n: 1.5 }, { n: 0.05 } ]

console.log(ow.sortBy(a, e => Math.cos(e.n)));
// [ { n: 3.3 }, { n: 4.1 }, { n: 1.5 }, { n: 0.05 } ]

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
const a = [{n: 4.1}, {n: 0.05}, {n: 1.5}, {n: 3.3}];

console.log(ow.sortBy(a, 'n'));
// [ { n: 1.5 }, { n: 1.3 }, { n: 0.1 }, { n: 0.05 } ]

console.log(ow.sortBy(a, 'n', -1),);
// [ { n: 4.1 }, { n: 3.3 }, { n: 1.5 }, { n: 0.05 } ]

console.log(ow.sortBy(a, e => Math.cos(e.n)));
// [ { n: 3.3 }, { n: 4.1 }, { n: 1.5 }, { n: 0.05 } ]

```

---

## `uniq(array)`  
- **parameters**:
    - the array with repeated elements
- **output**: resulting array
- **throws**: if the first argument is not an array

example

``` js  
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

last modified : 23/11/2024

༺ ᚗᚌ ༻ 
