function reduce(o, func, initial) {
    var isObj = core.introspection.isObject(o),
        isArr = core.introspection.isArray(o),
        res = initial || (isObj ? {} : []);
    if (isObj) {
        for (var k in o)
            res = func(res, o[k], k, o)
    }
    if (isArr) {
        for (var i = 0, l = o.length; i < l; i++) 
            res = func(res, o[i], i, o)
    }
    return res;
}
