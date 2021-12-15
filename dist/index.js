'use strict';
/*
objwun v. 1.1.15
fedeghe <fedeghe@gmail.com>

Isomorphic ES3 library to common stuff on object literals and arrays
~20.79KB on 15/12/2021
*/
var objwun = (function() {
    /*
    [Malta] core/index.js
    */
    var core = {}
    
    /*
    [Malta] core/errors.js
    */
    
    core.errors = {
        INVALID_ARGUMENT_ARRAY_EXPECTED: 'Invalid argument, array expected',
        INVALID_ARGUMENT_OBJECT_EXPECTED: 'Invalid argument, object expected',
        INVALID_ARGUMENT_INTEGER_EXPECTED: 'Invalid argument, integer expected',
        INVALID_ARGUMENT_BOOLEAN_EXPECTED: 'Invalid argument, boolean expected',
        INVALID_ARGUMENT_FUNCTION_EXPECTED: 'Invalid argument, function expected',
        INVALID_ARGUMENT_STRING_EXPECTED: 'Invalid argument, string expected',
        INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED: 'Invalid argument, string or function expected',
        INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED: 'Invalid argument, array or function expected',
        INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED: 'Invalid argument, object or array expected',
        INVALID_ARGUMENT_SIZE: 'Invalid argument, wrong size',
        MISSING_EXPECTED_ARGUMENT: 'Missing expected argument'
    };
    
    ;
    /*
    [Malta] core/utils.js
    */
    +function (){
        function args2arr(a) {
            return [].slice.call(a, 0);
        }
    
        function pick_omit(func) {
            return function (o, x) {
                core.mustBe.obj(o)
                core.mustBe.arr(x);
                var res = {};
                for (var i in o) { 
                    if (o.hasOwnProperty(i) && func(x.indexOf(i)))
                        res[i] = o[i];
                }
                return res;
            }
        }
    
        function objLoop(o, fn) {
            var res = {};
            for (var i in o) {
                if (o.hasOwnProperty(i)){
                    res[i] = fn(o[i], i)
                }
            }
            return res;
        }
    
        function arrLoop(o, fn) {
            var res = [],
                i = 0,
                l = o.length;
            for (null; i < l; i++) {
                res[i] = fn(o[i], i)
            }
            return res;
        }
    
        function clone(o) {return JSON.parse(JSON.stringify(o));}
    
        function splitPath (path) {
            return path.replace(/\\\./g, '\uffff').split('.').map(function(p) {
                return p.replace(/\uffff/g, '.');
            });
        }
    
        core.ut = {
            args2arr: args2arr,
            arrLoop: arrLoop,
            clone: clone,
            objLoop: objLoop,
            pick_omit: pick_omit,
            splitPath: splitPath
        };
    }()
    ;
    /*
    [Malta] core/introspection.js
    */
    +function () {
        function isObj(o) {
            var t0 = String(o) !== o,
                t1 = o === Object(o),
                t2 = typeof o !== 'function',
                t3 = {}.toString.call(o).match(/\[object\sObject\]/);
            return t0 && t1 && t2 && !!(t3 && t3.length);
        }
        function isArr(o) {
            var t2 = ({}).toString.call(o).match(/\[object\sArray\]/);
            return String(o) !== o && !!(t2 && t2.length);
        }
        function isFunc(o) {
            return typeof o === 'function'
        }
        function isStr(o) {
            return typeof o === 'string'
        }
        function isBool(o) {
            return typeof o === 'boolean'
        }
        function isNum(o) {
            return typeof o === 'number'
        }
        function isUndef(o) {
            return typeof o === 'undefined'
        }
        function isDef(o) {
            return typeof o !== 'undefined'
        }
        function isSymbol(o) {
            return typeof o === 'symbol'
        }
        function isBigint(o) {
            return typeof o === 'bigint'
        }
        function isPrimitive(o) {
            return isNum(o) || isStr(o) || isBool(o)
                || isSymbol(o) || isUndef(o) || isBigint(o)
        }
    
        core.in = {
            isArr: isArr,
            isBool: isBool,
            isBigint: isBigint,
            isDef: isDef,
            isFunc: isFunc,
            isNum: isNum,
            isObj: isObj,
            isPrimitive: isPrimitive,
            isStr: isStr,
            isSymbol: isSymbol,
            isUndef: isUndef
        };
    }();
    /*
    [Malta] core/must.js
    */
    +function () {
        function arr(a) {
            if (!core.in.isArr(a))
                throw new Error(core.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);
            return true;
        }
    
        function defined(a) {
            if (core.in.isUndef(a))
                throw new Error(core.errors.MISSING_EXPECTED_ARGUMENT);
            return true;
        }
        function func(a) {
            if (!core.in.isFunc(a))
                throw new Error(core.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);
            return true;
        }
    
        function bool(a) {
            if (!core.in.isBool(a))
                throw new Error(core.errors.INVALID_ARGUMENT_BOOLEAN_EXPECTED);
            return true;
        }
    
        function num(a) {
            if (!core.in.isNum(a))
                throw new Error(core.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);
            return true;
        }
    
        function obj(a) {
            if (!core.in.isObj(a))
                throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);
            return true;
        }
    
        function str(a) {
            if (!core.in.isStr(a))
                throw new Error(core.errors.INVALID_ARGUMENT_STRING_EXPECTED);
            return true;
        }
    
        // mixed
        function funcOrStr(a) {
            var isStr = core.in.isStr(a),
                isFunc = core.in.isFunc(a);
            if (!isStr && !isFunc)
                throw new Error(core.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);
            return {
                isFunc: isFunc,
                isStr: isStr,
            };
        }
        function funcOrArr(a) {
            var isArr = core.in.isArr(a),
                isFunc = core.in.isFunc(a);
            if (!isArr && !isFunc)
                throw new Error(core.errors.INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED);
            return {
                isFunc: isFunc,
                isArr: isArr
            };
        }
        function objOrArr(a) {
            var isArr = core.in.isArr(a),
                isObj = core.in.isObj(a);
            if (!isObj && !isArr)
                throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
            return {
                isObj: isObj,
                isArr: isArr,
            };
        }
        function sized(x, n) {
            var isArr = core.in.isArr(x),
                isObj = core.in.isObj(x);
            if (!isObj && !isArr)
                throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
            return (
                (isArr && x.length === n)
                ||
                (isObj && Object.values(x).length === n)
            );
        }
    
    
        core.mustBe = {
            arr: arr,
            defined: defined,
            func: func,
            funcOrStr: funcOrStr,
            funcOrArr: funcOrArr,
            bool: bool,
            num: num,
            obj: obj,
            objOrArr: objOrArr,
            sized: sized,
            str: str,
        };
    }();
    
    
    ;

    /*
    [Malta] methods/assign.js
    */
    function assign() {
        // @filter
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        var args = core.ut.args2arr(arguments),
            res = {},
            i = -1,
            l = args.length,
            j;
    
        if (l) {
            while (++i < l){
                core.mustBe.obj(args[i]);
                for(j in args[i])
                    if (args[i].hasOwnProperty(j)) {
                        res[j] = JSON.parse(JSON.stringify(args[i][j]));
                    }
            }
        }
        return res;
    };
    /*
    [Malta] methods/clone.js
    */
    function clone(a) {
        var what = core.mustBe.objOrArr(a),
            v,
            res = what.isArr ? [] : {};
        for (var k in a) {
            v = a[k];
            res[k] = core.in.isObj(v) ? clone(v) : v;
        }
        return res;
    };
    /*
    [Malta] methods/debounce.js
    */
    function debounce(func, delay) {
        core.mustBe.func(func);
        core.mustBe.num(delay);
        var to,
            ret = function () {
                var args = [].slice.call(arguments),
                    self = this;
                clearTimeout(to);
                to = setTimeout(function (){
                    return func.apply(self, args);
                }, delay);
            };
        ret.cancel = function () {
            clearTimeout(to);
        }
        return ret
    }
    ;
    /*
    [Malta] methods/every.js
    */
    function every(x, fn) {
        var what = core.mustBe.objOrArr(x);
        core.mustBe.func(fn);
        if (what.isArr) return x.every(fn);
        for (var i in x) {
            if (x.hasOwnProperty(i) && !fn(x[i], i)) {
                return false
            }
        }
        return true    
    };
    /*
    [Malta] methods/filter.js
    */
    function filter(x, fn) {
        var what = core.mustBe.objOrArr(x);
        core.mustBe.func(fn);
        if (what.isArr) return x.filter(fn);
        var ks = Object.keys(x);
        return ks.reduce(function (acc, el, i) {
            if (fn(x[el], ks[i], x)) {
                acc[ks[i]] = x[el];
            }
            return acc;
        }, {});
    };
    /*
    [Malta] methods/find.js
    */
    function find(x, fn) {
        var what = core.mustBe.objOrArr(x);
        core.mustBe.func(fn);
    
        if(what.isArr)  return x.find(fn);
        var kz = Object.keys(x);
        
        return Object.values(x).find(function(v, k, x){
            return fn(v, kz[k], x);
        });
    };
    /*
    [Malta] methods/findIndex.js
    */
    function findIndex(x, fn) {
        var what = core.mustBe.objOrArr(x);
        core.mustBe.func(fn);
    
        if (what.isArr) {
            return x.findIndex(fn);
        }
        var keys = Object.keys(x),
            fi = keys.findIndex(function (k) { return fn(x[k])});
        return fi >= 0 ? keys[fi] : -1; 
    };
    /*
    [Malta] methods/forEach.js
    */
    function forEach(o, func) {    
        var what = core.mustBe.objOrArr(o);
        func = func || function (e) {
            return e;
        };
        return what.isObj 
            ? core.ut.objLoop(o, func)
            : core.ut.arrLoop(o, func);
    }
    ;
    /*
    [Malta] methods/fromEntries.js
    */
    function fromEntries(a) {    
        core.mustBe.arr(a);
        return a.reduce(function (acc, el) {
            core.mustBe.arr(el);
            core.mustBe.sized(el, 2);
            acc[el[0]] = el[1];
            return acc;
        }, {});
    }
    ;
    /*
    [Malta] methods/get.js
    */
    function get(obj, path, defaultValue) {
        core.mustBe.objOrArr(obj);
        core.mustBe.defined(path);
        if (
            isEmpty(obj) || isEmpty(path)
        ) return defaultValue || null;
        defaultValue = defaultValue || null;
    
        path = path.replace(
            /\[(\d+)\]/g,
            function (a, dec) {
                return '.' + dec;
            }
        );
    
        var els = path.split('.'),
            res = obj,
            i = -1,
            l = els.length,
            there;
            
        while (++i < l) {
            if (core.in.isPrimitive(res)) return defaultValue;
            there = els[i] in res;
            if (!there) return defaultValue || null;
            res = res[els[i]]; // still pure
        }
        return res;
    };
    /*
    [Malta] methods/id.js
    */
    var id = new function () {
        var count = 0,
            self = this;
        this.prefix = 'id_';
        this.toString = function () {
            count += 1;
            return self.prefix + count;
        };
    };
    /*
    [Malta] methods/includes.js
    */
    function includes(x, el) {
        var what = core.mustBe.objOrArr(x);
        core.mustBe.defined(el);
        if (what.isArr) return x.includes(el);
        for (var k in x) 
            if (x.hasOwnProperty(k) && x[k] === el)
                return true;
        return false;
    };
    /*
    [Malta] methods/intersection.js
    */
    function intersection() {
        var args = core.ut.args2arr(arguments),
            check = args.forEach(function (a) {core.in.isArr(a);}),
            res = [].slice.call(args[0], 0),
            l = args.length,
            i = 1;
        while (i < l) {
            res = res.filter(function(el) {
                return args[i].includes(el);
            })
            i++;
        }
        return res;
    };
    /*
    [Malta] methods/isEmpty.js
    */
    function isEmpty(o) {
        core.mustBe.defined(o);
        
        return o === ''
            || o === null
            || (core.in.isStr(o) && o.length === 0)
            || (core.in.isArr(o) && o.length === 0)
            || (core.in.isObj(o) && (
                (function(){
                    for (var i in o) {
                        if (o.hasOwnProperty(i)) {
                            return false;
                        } else {
                            continue;
                        }
                    }
                    return true;
                })()
            ));
    };
    /*
    [Malta] methods/keyBy.js
    */
    function keyBy(o, kf) {
        core.mustBe.arr(o);
        core.mustBe.funcOrStr(kf);
    
        var res = {},
            i = -1,
            l = o.length;
        if (typeof kf === 'function') {
            while (++i < l) {
                res[kf(o[i])] = o[i];
            }
        } else {
            while (++i < l) {
                res[o[i][kf]] = o[i];
            }
        }
        return res;
    };
    /*
    [Malta] methods/map.js
    */
    function map(o, func) {
        core.mustBe.objOrArr(o);
        func = func || function (obj){return obj;};
        if (core.in.isObj(o)) {
            return core.ut.objLoop(o, func);
        }
        // thus array
        return core.ut.arrLoop(o, func);
    };
    /*
    [Malta] methods/merge.js
    */
    function merge() {
        var objs = core.ut.args2arr(arguments);
        if (core.in.isArr(objs[0])) {
            forEach(objs, core.mustBe.arr);
            return reduce(objs, function (acc, obj) {
                acc = acc.concat(clone(obj))
                return acc;
            }, []);
        } else if (core.in.isObj(objs[0])) {
            forEach(objs, core.mustBe.obj);
            return reduce(objs, function (acc, obj) {
                for (var k in obj) {
                    acc[k] = core.in.isPrimitive(obj[k]) ? obj[k] : clone(obj[k]);
                }
                return acc;
            }, {});
        } else {
            return null
        }
    };
    /*
    [Malta] methods/omit.js
    */
    var omit = core.ut.pick_omit(function (i) {return i < 0});;
    /*
    [Malta] methods/pick.js
    */
    var pick = core.ut.pick_omit(function (i) {return i >= 0});;
    /*
    [Malta] methods/reduce.js
    */
    function reduce(o, fn, initial) {
        var what = core.mustBe.objOrArr(o);
        core.mustBe.func(fn);
        var res = initial || (what.isObj ? {} : []);
    
        return what.isObj
            ? Object.keys(o).reduce( function(acc, k, i, ob) { return fn(acc, o[k], k, o);}  , res)
            : o.reduce(fn, res);
    }
    ;
    /*
    [Malta] methods/remove.js
    */
    function remove(x, func) {    
        var what = core.mustBe.objOrArr(x);
        func = func || function (e) {
            return false;
        };
        core.mustBe.func(func);
        var res;
        if (what.isObj) {
            res = {};
            for (var k in x) {
                if (x.hasOwnProperty(k)) {
                    if (func(x[k])) {
                        res[k] = x[k];
                        delete x[k];
                    }
                }
            }
        } else {
            res = [];
            for (var k = 0, l = x.length; k < l; k++) {
                if (func(x[k], k)) {
                    res.push(x[k]);
                    x.splice(k, 1);
                }
            }
        }
        return res;
    }
    ;
    /*
    [Malta] methods/some.js
    */
    function some(x, fn) {
        var what = core.mustBe.objOrArr(x);
        core.mustBe.func(fn);
        if (what.isArr) {
            for (var i = 0, l = x.length; i < l; i++) {
                if (fn(x[i], i)) {
                    return true;
                }
            }
        } 
        for(var i in x) {
            if (x.hasOwnProperty(i) && fn(x[i], i)) {
                return true;
            }
        }
        return false;
    };
    /*
    [Malta] methods/set.js
    */
    function set(obj, path, value) {
        core.mustBe.objOrArr(obj);
        core.mustBe.str(path);
        core.mustBe.defined(value);
    
        path = path.replace(
            /\[(\d+)\]/g,
            function (a, dec) {
                return '.' + dec;
            }
        );
        var isPolluting = function(el) {
                return el.match(/(__proto__|constructor|prototype)/);
            },
            els = core.ut.splitPath(path),
            res = core.ut.clone(obj),
            i = 0,
            l = els.length,
            tmp = res;
            
        for (null; i < l-1; i++) { 
            if (isPolluting(els[i])) return tmp;
            if (!(els[i] in tmp) || core.in.isPrimitive(tmp[els[i]])) {
                //if next key is a number create an array, or use an obj
                tmp[els[i]] = els[i+1].match(/\d+/) ? [] : {};
            }
            tmp = tmp[els[i]];
        }
        if (isPolluting(els[i])) return tmp;
        // finally
        tmp[els[i]] = core.in.isPrimitive(value) ? value : core.ut.clone(value);
        return res;
    };
    /*
    [Malta] methods/sortBy.js
    */
    function sortBy(o, kf, vrs) {
        core.mustBe.arr(o);
        var what = core.mustBe.funcOrStr(kf),
            // for purity
            res = [].concat(o);
        vrs = vrs || 1;
        core.mustBe.num(vrs);
    
        return what.isFunc
            ? res.sort(function (a, b) {
                return kf(a) < kf(b) ? -vrs : vrs;
            })
            : res.sort(function (a, b) {
                return a[kf] < b[kf] ? -vrs : vrs;
            });
    };
    /*
    [Malta] methods/times.js
    */
    function times(n, func, ctx) {
        core.mustBe.num(n);
        core.mustBe.func(func);
        ctx = ctx || null;
        var res = [],
            i = 0;
        for (null; i < n; i++)
            res[i] = func.call(ctx, i);
        return res;
    };
    /*
    [Malta] methods/uniq.js
    */
    function uniq(a) {
        var tmp = {},
            i = 0,
            l = a.length,
            res = [];
        for (null; i < l; i++) {
            tmp[a[i].toString()] = a[i];
        }
        for (var j in tmp) {
            res.push(tmp[j]);
        }
        return res;
    };
    /*
    [Malta] methods/uniqBy.js
    */
    
    function uniqBy(a, w) {
        core.mustBe.arr(a);
        if (core.in.isUndef(w)) return uniq(a);
        var what = core.mustBe.funcOrStr(w);
        var tmp = {},
            i = 0,
            l = a.length,
            t;
        if (what.isStr) {
            for (null; i < l; i++) {
                core.mustBe.obj(a[i]);
                if (!(a[i][w] in tmp)) tmp[a[i][w]] = a[i];
            }
        } else {
            for (null; i < l; i++) {
                t = w(a[i]);
                if (!(t in tmp)) tmp[t] = a[i];
            }
        }
        return Object.values(tmp);
    };

    return {
        assign: assign,
        clone: clone,
        debounce: debounce,
        every: every,
        filter: filter,
        find: find,
        findIndex: findIndex,
        forEach: forEach,
        fromEntries: fromEntries,
        get: get,
        id: id,
        includes: includes,
        intersection: intersection,
        isEmpty: isEmpty,
        keyBy: keyBy,
        map: map,
        merge: merge,
        omit: omit,
        pick: pick,
        reduce: reduce,
        remove: remove,
        set: set,
        some: some,
        sortBy: sortBy,
        times: times,
        uniq: uniq,
        uniqBy: uniqBy,

        isArray: core.in.isArr,
        isBigint: core.in.isBigint,
        isFunction: core.in.isFunc,
        isObject: core.in.isObj,
        isString: core.in.isStr,
        isBoolean: core.in.isBool,
        isNumber: core.in.isNum,
        isUndefined: core.in.isUndef,
        isDefined: core.in.isDef,
        isSymbol: core.in.isSymbol,
        isPrimitive: core.in.isPrimitive, 
        core: core,
    }
})();
(typeof exports === 'object') && (module.exports = objwun);