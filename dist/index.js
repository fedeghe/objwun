'use strict';
/*
objwun v. 0.0.12
fedeghe <fedeghe@gmail.com>

Isomorphic ES3 library to common stuff on object literals and arrays
~13KB on 23/8/2020
*/
(function(fn) {
    /* istanbul ignore next */
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = fn();
	} else if (typeof define === "function" && define.amd) {
		define([], fn);
	} else {
		if (typeof window !== "undefined") {
			root = window;
		} else if (typeof global !== "undefined") {
			root = global;
		} else if (typeof self !== "undefined") {
			root = self;
		} else {
			root = this;
		}
		root.objwun = fn.call(root);
	}
})(function _(){
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
    
        core.ut = {
            args2arr: args2arr,
            arrLoop: arrLoop,
            objLoop: objLoop,
            pick_omit: pick_omit,
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
            // nope
            //
            // if (Array.isArray && Array.isArray(o)) {
            //     return true;
            // }
            var t2 = ({}).toString.call(o).match(/\[object\sArray\]/);
            return String(o) !== o && !!(t2 && t2.length);
        }
    
        function isFunc(o) {
            return typeof o === 'function'
        }
        function isStr(o) {
            return typeof o === 'string'
        }
        // function isBool(o) {
        //     return typeof o === 'boolean'
        // }
    
        function isNum(o) {
            return typeof o === 'number'
        }
    
        function isUndef(o) {
            return typeof o === 'undefined'
        }
    
        core.in = {
            isArr: isArr,
            // isBool: isBool,
            isFunc: isFunc,
            isNum: isNum,
            isObj: isObj,
            // isObjOrArr: isObjOrArr,
            isStr: isStr,
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
    
        // function str(a) {
        //     if (!core.in.isStr(a))
        //         throw new Error(core.errors.INVALID_ARGUMENT_STRING_EXPECTED);
        //     return true;
        // }
    
        // composed
        function funcOrStr(a) {
            if (!core.in.isStr(a) && !core.in.isFunc(a))
                throw new Error(core.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);
            return true;
        }
        function objOrArr(a) {
            if (!core.in.isObj(a) && !core.in.isArr(a))
                throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
            return true;
        }
    
    
        core.mustBe = {
            arr: arr,
            defined: defined,
            func: func,
            funcOrStr: funcOrStr,
            // bool: bool,
            num: num,
            obj: obj,
            objOrArr: objOrArr,
            // str: str,
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
            res = {};
    
        if (args.length) {
            for (var i = 0, l = args.length, j; i < l; i++){
                core.mustBe.obj(args[i])
                for(j in args[i])
                    if (args[i].hasOwnProperty(j)) {
                        res[j] = args[i][j]
                    } else {
                        continue
                    }
            }
            return res;
        }
        return res;
    };
    /*
    [Malta] methods/filter.js
    */
    function filter(a, fn) {
        core.mustBe.arr(a)
        core.mustBe.func(fn)
        var res = [];
        for (var i = 0, l = a.length; i < l; i++) {
            if (fn(a[i], i)) {
                res.push(a[i])
            }
        }
        return res;
    };
    /*
    [Malta] methods/forEach.js
    */
    function forEach(o, func) {    
        core.mustBe.objOrArr(o)
        func = func || function (e, i) {
            return e
        }
        var res;
        if (core.in.isObj(o)) {
            res = core.ut.objLoop(o, func)
        }
        if (core.in.isArr(o)){
            res = core.ut.arrLoop(o, func)
        }
        return res;
    
    }
    ;
    /*
    [Malta] methods/get.js
    */
    function get(obj, path, defaultValue) {
    
        core.mustBe.objOrArr(obj)
        core.mustBe.defined(path)
        if (
            isEmpty(obj) || isEmpty(path)
        ) return defaultValue || null
    
        path = path.replace(
            /\[(\d+)\]/g,
            function (a, dec) {
                return '.' + dec;
            }
        );
    
        var els = path.split('.'),
            res = obj,
            i = 0,
            l = els.length,
            there;
            
        for (null; i < l; i++) {
            there = els[i] in res
            if (!there) return defaultValue || null
            res = res[els[i]]
        }
    
        return res
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
        var res = false;
        core.mustBe.arr(o)
        core.mustBe.defined(el)
        for (var i = 0, l = o.length; i < l; i++)
            if (o[i] === el) {
                return true
            } else {
                continue
            }
        return res;
    };
    /*
    [Malta] methods/isEmpty.js
    */
    function isEmpty(o) {
        core.mustBe.defined(o)
        
        return o === ''
            || o === null
            || (core.in.isStr(o) && o.length === 0)
            || (core.in.isArr(o) && o.length === 0)
            || (core.in.isObj(o) && (
                // (typeof Object.keys === 'function'
                //     && Object.keys(o).length === 0
                //     && o.constructor === Object
                // )
                // ||
                (function(){
                    for (var i in o) {
                        if (o.hasOwnProperty(i)) {
                            return false
                        } else {
                            continue
                        }
                    }
                    return true
                })()
            ))
    
    };
    /*
    [Malta] methods/keyBy.js
    */
    function keyBy(o, kf) {
        core.mustBe.arr(o);
        core.mustBe.funcOrStr(kf);
    
        var res = {},
            i = 0,
            l = o.length;
        if (typeof kf === 'function') {
            for (; i < l; i++) {
                res[kf(o[i])] = o[i]
            }
        } else {
            for (; i < l; i++) {
                res[o[i][kf]] = o[i]
            }
        }
        return res;
    };
    /*
    [Malta] methods/map.js
    */
    function map(o, func) {
        core.mustBe.objOrArr(o)
        func = func || function (obj){return obj;};
        if (core.in.isObj(o)) {
            return core.ut.objLoop(o, func)
        }
        // thus array
        return core.ut.arrLoop(o, func)
    };
    /*
    [Malta] methods/omit.js
    */
    var omit = core.ut.pick_omit(function (i) {return i < 0});
    /*
    [Malta] methods/pick.js
    */
    var pick = core.ut.pick_omit(function (i) {return i >= 0});
    /*
    [Malta] methods/reduce.js
    */
    function reduce(o, fn, initial) {
        core.mustBe.objOrArr(o)
        core.mustBe.func(fn)
        var isObj = core.in.isObj(o),
            isArr = core.in.isArr(o),
            res = initial || (isObj ? {} : []);
    
        if (isObj)
            for (var k in o)
                res = fn(res, o[k], k, o)
    
        if (isArr)
            for (var i = 0, l = o.length; i < l; i++) 
                res = fn(res, o[i], i, o)
    
        return res;
    }
    ;
    /*
    [Malta] methods/some.js
    */
    function some(a, fn) {
        core.mustBe.arr(a)
        core.mustBe.func(fn)
        var res = false;
        for (var i = 0, l = a.length; i < l && !res; i++) {
            if (fn(a[i], i)) {
                res = true;
            }
        }
        return res;
    };
    /*
    [Malta] methods/sortBy.js
    */
    function sortBy(o, kf, vrs) {
        core.mustBe.arr(o)
        core.mustBe.funcOrStr(kf)
        // for purity
        var res = [].concat(o)
        vrs = vrs || 1
        return (typeof kf === 'function') 
            ? res.sort(function (a, b) {
                return kf(a) < kf(b) ? -vrs : vrs
            })
            : res.sort(function (a, b) {
                return a[kf] < b[kf] ? -vrs : vrs
            })
    };
    /*
    [Malta] methods/times.js
    */
    function times(n, func, ctx) {
        core.mustBe.num(n)
        core.mustBe.func(func)
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
            tmp[a[i]] = a[i]
        }
        for (var j in tmp) {
            res.push(tmp[j])
        }
        return res;
    };
    
    return {
        assign: assign,
        filter: filter,
        forEach: forEach,
        get: get,
        id: id,
        includes: includes,
        isEmpty: isEmpty,
        keyBy: keyBy,
        map: map,
        omit: omit,
        pick: pick,
        reduce: reduce,
        some: some,
        sortBy: sortBy,
        times: times,
        uniq: uniq,
    }
});