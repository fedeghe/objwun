/*
objwun v. 0.0.0
fedeghe <fedeghe@gmail.com>

A library to deal efficiently with Object literals
~1KB on 19/7/2020
*/
(function(fn) {
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
    var core = (function () {
        function arguments2array(a) {
            return [].slice.call(a, 0);
        }
        function isObject(o) {
            var t0 = String(o) !== o,
                t1 = o === Object(o),
                t2 = typeof o !== 'function',
                t3 = {}.toString.call(o).match(/\[object\sObject\]/);
            return t0 && t1 && t2 && !!(t3 && t3.length);
        }
    
        return {
            arguments2array: arguments2array,
            isObject: isObject
        }
    })();
    ;
    /*
    [Malta] methods/assign.js
    */
    function assign() {
        var args = core.arguments2array(arguments).filter(function (o){
                return core.isObject(o)
            }),
            res = {};
        if (args.length) {
            args.forEach(function (obj) {
                res = Object.assign(res, obj)
            })
            return res;
        }
        return res;
    };
    return {
        assign: assign
    }
});