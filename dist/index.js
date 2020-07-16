/*
objwun v. 0.0.0
fedeghe <fedeghe@gmail.com>

A library to deal efficiently with Object literals
~1KB on 16/7/2020
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
        return {
            arguments2array: arguments2array
        }
    })();
    ;
    /*
    [Malta] methods/assign.js
    */
    function assign() {
        console.log('arguments', arguments)
        var args = core.arguments2array(arguments);
        console.log('args', args)
        if (args.length) {
            return args;
        }
        return {};
    };
    return {
        assign: assign
    }
});