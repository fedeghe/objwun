function includes(o, el) {
    var res = false;
    if (!core.in.isArr(o)) throw new Error(core.errors.INVALID_ARGUMENT_ARRAY_EXPECTED)
    if (typeof el === 'undefined') throw new Error(core.errors.MISSING_EXPECTED_ARGUMENT)
    for(var i = 0, l = o.length; i < l; i++)
        if (o[i] === el)
            return true
    return res;
}