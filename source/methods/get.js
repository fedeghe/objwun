function get(obj, path, defaultValue) {
    if (!core.in.isObj(obj) && !core.in.isArr(obj))
        throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED)
    if (typeof path === 'undefined')
        throw new Error(core.errors.MISSING_EXPECTED_ARGUMENT)
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
}