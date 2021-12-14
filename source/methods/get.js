function get(obj, path, defaultValue) {
    core.mustBe.objOrArr(obj);
    core.mustBe.defined(path);
    if (
        isEmpty(obj) || isEmpty(path)
    ) return defaultValue || null;
    defaultValue = defaultValue || null;

    path = path.replace(
        /\[(\d+)\]/g,
        function (a, dec) {
            return '.' + dec;
        }
    );

    var els = path.split('.'),
        res = obj,
        i = -1,
        l = els.length,
        there;
        
    while (++i < l) {
        if (core.in.isPrimitive(res)) return defaultValue;
        there = els[i] in res;
        if (!there) return defaultValue || null;
        res = res[els[i]]; // still pure
    }
    return res;
}