function get(obj, path, defaultValue) {

    core.mustBe.objOrArr(obj)
    core.mustBe.defined(path)
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