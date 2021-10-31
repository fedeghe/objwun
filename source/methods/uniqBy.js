
function uniqBy(a, what) {
    if (core.in.isUndef(what)) return uniq(a)
    var tmp = {},
        i = 0,
        l = a.length,
        res = [],
        t;
    if (core.in.isStr(what)) {
        for (null; i < l; i++) {
            if (!(a[i][what] in tmp)) tmp[a[i][what]] = a[i];
        }
    }
    if (core.in.isFunc(what)) {
        for (null; i < l; i++) {
            t = what(a[i])
            if (!(t in tmp)) tmp[t] = a[i];
        }
    }
    for (var j in tmp) {
        res.push(tmp[j]);
    }
    return res;
    
}