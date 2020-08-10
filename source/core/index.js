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

    function pick_omit(func) {
        return function (o, x) {
            var res = {};
            x = x || [];
            for(var i in o)
                if (o.hasOwnProperty(i) && func(x.indexOf(i)))
                    res[i] = o[i];
            return res;
        }
    }

    function isArray(o) {
        if (Array.isArray && Array.isArray(o)) {
            return true;
        }
        var t1 = String(o) !== o,
            t2 = ({}).toString.call(o).match(/\[object\sArray\]/);
        return t1 && !!(t2 && t2.length);
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

    return {
        arguments2array: arguments2array,
        isArray: isArray,
        isObject: isObject,
        objLoop: objLoop,
        pick_omit: pick_omit,
    };
})();
