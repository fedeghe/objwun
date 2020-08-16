/*
objwun v. 0.0.1
fedeghe <fedeghe@gmail.com>

A library to deal efficiently with Object literals
~6KB on 16/8/2020
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
        INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED: 'Invalid argument, object or array expected',
        MISSING_EXPECTED_ARGUMENT: 'Missing expected argument'
    };
    
    ;
    /*
    [Malta] core/utils.js
    */
    
    
    function args2arr(a) {
        return [].slice.call(a, 0);
    }
    
    function pick_omit(func) {
        return function (o, x) {
            var res = {};
            x = x || [];
            for (var i in o)
                if (o.hasOwnProperty(i) && func(x.indexOf(i)))
                    res[i] = o[i];
            return res;
        }
    }
    
    function objLoop(o, fn) {
        var res = [],
            j = 0;
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                res[j++] = fn(o[i], i)
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
    
    ;
    /*
    [Malta] core/introspection.js
    */
    function isObj(o) {
        var t0 = String(o) !== o,
            t1 = o === Object(o),
            t2 = typeof o !== 'function',
            t3 = {}.toString.call(o).match(/\[object\sObject\]/);
        return t0 && t1 && t2 && !!(t3 && t3.length);
    }
    
    function isArr(o) {
        if (Array.isArray && Array.isArray(o)) {
            return true;
        }
        var t1 = String(o) !== o,
            t2 = ({}).toString.call(o).match(/\[object\sArray\]/);
        return t1 && !!(t2 && t2.length);
    }
    
    function isUndefined(o) {
        return typeof o === 'undefined'
    }
    
    core.in = {
        isArr: isArr,
        isUndefined: isUndefined,
        isObj: isObj,
    };
    ;
    
    
    ;

    /*
    [Malta] methods/assign.js
    */
    function assign() {
        // @filter
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        var args = core.ut.args2arr(arguments).filter(core.in.isObj),
            res = {};
    
        if (args.length) {
            for (var i = 0, l = args.length, j; i < l; i++)
                for(j in args[i])
                    if (args[i].hasOwnProperty(j))
                        res[j] = args[i][j]
            return res;
        }
        return res;
    };
    /*
    [Malta] methods/get.js
    */
    function get(obj, path, defaultValue) {
        if (!core.in.isObj(obj) && !core.in.isArr(obj)) throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED)
        if (typeof path === 'undefined') throw new Error(core.errors.MISSING_EXPECTED_ARGUMENT)
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
            
        for (null ; i < l; i++) {
            there = els[i] in res
            if (!there) return defaultValue || null
            res = res[els[i]]
        }
    
        return res
    };
    /*
    [Malta] methods/isEmpty.js
    */
    function isEmpty(o) {
        return o === ''
            || o === null
            || core.in.isUndefined(o)
            || (core.in.isArr(o) && o.length === 0)
            || (core.in.isObj(o) && (
                (typeof Object.keys === 'function'
                    && Object.keys(o).length === 0
                    && o.constructor === Object
                )
                || ((function(){
                    for(var i in o) {
                        if (o.hasOwnProperty(i)) return false
                    }
                })())
            ))
    
    };
    /*
    [Malta] methods/includes.js
    */
    function includes(o, el) {
        var res = false;
        if (!core.in.isArr(o)) throw new Error(core.errors.INVALID_ARGUMENT_ARRAY_EXPECTED)
        if (typeof el === 'undefined') throw new Error(core.errors.MISSING_EXPECTED_ARGUMENT)
        for(var i = 0, l = o.length; i < l; i++)
            if (o[i] === el)
                return true
        return res;
    };
    /*
    [Malta] methods/map.js
    */
    function map(o, func) {
        var res = [];
        func = func || function (obj){return obj;};
        if (core.in.isObj(o)) {
            return core.ut.objLoop(o, func)
        }
        if (core.in.isArr(o)){
            return core.ut.arrLoop(o, func)
        }
        return res;
    };
    /*
    [Malta] methods/omit.js
    */
    const omit = core.ut.pick_omit(function (i) {return i < 0});
    /*
    [Malta] methods/pick.js
    */
    const pick = core.ut.pick_omit(function (i) {return i >= 0});
    /*
    [Malta] methods/reduce.js
    */
    function reduce(o, func, initial) {
        var isObj = core.in.isObj(o),
            isArr = core.in.isArr(o),
            res = initial || (isObj ? {} : []);
    
        if (isObj)
            for (var k in o)
                res = func(res, o[k], k, o)
    
        if (isArr)
            for (var i = 0, l = o.length; i < l; i++) 
                res = func(res, o[i], i, o)
    
        return res;
    }
    ;
    /*
    [Malta] methods/times.js
    */
    function times(n, func, ctx) {
        n = n || 0;
        ctx = ctx || null;
        var res = [],
            i = 0;
        for (null; i < n; i++)
            res[i] = func.call(ctx, i);
        return res;
    };
    
    return {
        assign: assign,
        get: get,
        isEmpty: isEmpty,
        includes: includes,
        map: map,
        omit: omit,
        pick: pick,
        reduce: reduce,
        times: times
    }
});