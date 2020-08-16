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
