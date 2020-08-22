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
