
function uniqBy(a, w) {
    core.mustBe.arr(a);
    if (core.in.isUndef(w)) return uniq(a);
    var what = core.mustBe.funcOrStr(w);
    var tmp = {},
        i = 0,
        l = a.length,
        t;
    if (what.isStr) {
        for (null; i < l; i++) {
            core.mustBe.obj(a[i]);
            if (!(a[i][w] in tmp)) tmp[a[i][w]] = a[i];
        }
    } else {
        for (null; i < l; i++) {
            t = w(a[i]);
            if (!(t in tmp)) tmp[t] = a[i];
        }
    }
    return Object.values(tmp);
}