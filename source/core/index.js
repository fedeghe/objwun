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

    return {
        arguments2array: arguments2array,
        isObject: isObject,
        pick_omit: pick_omit,
    };
})();
