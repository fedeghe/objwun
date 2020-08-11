function get(obj, path, defaultValue) {
    if (
        isEmpty(obj) || isEmpty(path)
    ) return defaultValue || null

    var els = path.split('.'),
        res = obj,
        i = 0,
        l = els.length,
        there,
        keepGoing = true;
    for (null ; keepGoing && i < l; i++) {
        there = els[i] in res
        if (!there) return defaultValue || null
        res = res[els[i]]
    }
    return res
}