function clone(a) {
    var what = core.mustBe.objOrArr(a),
        v,
        res = what.isArr ? [] : {};
    for (var k in a) {
        v = a[k];
        res[k] = core.in.isObj(v) ? clone(v) : v;
    }
    return res;
}