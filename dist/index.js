'use strict';
/*
objwun v. 1.1.5
fedeghe <fedeghe@gmail.com>

Isomorphic ES3 library to common stuff on object literals and arrays
~17.32KB on 23/11/2020
*/
var objwun = (function (){
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
        // INVALID_ARGUMENT_BOOLEAN_EXPECTED: 'Invalid argument, boolean expected',
        INVALID_ARGUMENT_FUNCTION_EXPECTED: 'Invalid argument, function expected',
        INVALID_ARGUMENT_STRING_EXPECTED: 'Invalid argument, string expected',
    
        INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED: 'Invalid argument, string or function expected',
        INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED: 'Invalid argument, array or function expected',
        INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED: 'Invalid argument, object or array expected',
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
    
        core.ut = {
            args2arr: args2arr,
            arrLoop: arrLoop,
            clone: clone,
            objLoop: objLoop,
            pick_omit: pick_omit
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
    
        // function bool(a) {
        //     if (!core.in.isBool(a))
        //         throw new Error(core.errors.INVALID_ARGUMENT_BOOLEAN_EXPECTED);
        //     return true;
        // }
    
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
    
    
        core.mustBe = {
            arr: arr,
            defined: defined,
            func: func,
            funcOrStr: funcOrStr,
            funcOrArr: funcOrArr,
            // bool: bool,
            num: num,
            obj: obj,
            objOrArr: objOrArr,
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
        core.mustBe.objOrArr(a)
        return JSON.parse(JSON.stringify(a))
    };
    /*
    [Malta] methods/debounce.js
    */
    function debounce(func, delay) {
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
    [Malta] methods/filter.js
    */
    function filter(a, fn) {
        core.mustBe.arr(a);
        core.mustBe.func(fn);
        var res = [],
            i = -1,
            l = a.length;
        while (++i < l) {
            fn(a[i], i) && res.push(a[i]);
        }
        return res;
    };
    /*
    [Malta] methods/find.js
    */
    function find(a, fn) {
        core.mustBe.arr(a);
        core.mustBe.func(fn);
        var i = -1,
            l = a.length;
        while (++i < l) {
            if (fn(a[i], i)){
                return a[i];
            }
        }
        return null;
    };
    /*
    [Malta] methods/findIndex.js
    */
    function findIndex(a, fn) {
        core.mustBe.arr(a);
        core.mustBe.func(fn);
        var i = -1,
            l = a.length;
        while (++i < l) {
            if (fn(a[i], i)){
                return i;
            }
        }
        return -1;
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
    [Malta] methods/get.js
    */
    function get(obj, path, defaultValue) {
        core.mustBe.objOrArr(obj);
        core.mustBe.defined(path);
        if (
            isEmpty(obj) || isEmpty(path)
        ) return defaultValue || null;
    
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
    function includes(o, el) {
        core.mustBe.arr(o);
        core.mustBe.defined(el);
    
        var i = -1,
            l = o.length;
        while (++i < l)
            if (o[i] === el) {
                return true;
            }
        return false;
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
        core.mustBe.objOrArr(o);
        core.mustBe.func(fn);
        var isObj = core.in.isObj(o),
            isArr = core.in.isArr(o),
            res = initial || (isObj ? {} : []);
    
        if (isObj)
            for (var k in o)
                res = fn(res, o[k], k, o);
    
        if (isArr)
            for (var i = 0, l = o.length; i < l; i++) 
                res = fn(res, o[i], i, o);
    
        return res;
    }
    ;
    /*
    [Malta] methods/remove.js
    */
    function remove(a, x) {
        core.mustBe.arr(a);
        var what = core.mustBe.funcOrArr(x),
            res = [].concat(a),
            xsort;
        if (what.isFunc) {
            for (var i = 0; i < res.length; null) {
                if (x(res[i], i)) {
                    res = res.slice(0, i).concat(res.slice(i+1));
                } else {
                    i++;
                }
            }
        } else {
            // isArray
            xsort = [].concat(x).sort(function(a, b){return  a > b ? -1: 1}); //reversed
            for (var i = 0, l = xsort.length;i < l; i++) {
                res = res.slice(0, xsort[i]).concat(res.slice(xsort[i]+1));
            }
        }
        return res;
    };
    /*
    [Malta] methods/some.js
    */
    function some(a, fn) {
        core.mustBe.arr(a);
        core.mustBe.func(fn);
        for (var i = 0, l = a.length; i < l; i++) {
            if (fn(a[i], i)) {
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
        var els = path.split('.'),
            res = core.ut.clone(obj),
            i = 0,
            l = els.length,
            tmp = res;
            
        for (null; i < l-1; i++) { 
            if (!(els[i] in tmp) || core.in.isPrimitive(tmp[els[i]])) {
                //if next key is a number create an array, or use an obj
                tmp[els[i]] = els[i+1].match(/\d+/) ? [] : {};
            }
            tmp = tmp[els[i]];
        }
        // finally
        tmp[els[i]] = core.in.isPrimitive(value) ? value : core.ut.clone(value);
        return res;
    };
    /*
    [Malta] methods/sortBy.js
    */
    function sortBy(o, kf, vrs) {
        core.mustBe.arr(o);
        core.mustBe.funcOrStr(kf);
        // for purity
        var res = [].concat(o);
        vrs = vrs || 1;
        return (typeof kf === 'function') 
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
            tmp[a[i]] = a[i];
        }
        for (var j in tmp) {
            res.push(tmp[j]);
        }
        return res;
    };
    
    return {
        assign: assign,
        clone: clone,
        debounce: debounce,
        filter: filter,
        find: find,
        findIndex: findIndex,
        forEach: forEach,
        get: get,
        id: id,
        includes: includes,
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
        isPrimitive: core.in.isPrimitive
    }
})();
(typeof exports === 'object') && (module.exports = objwun);
