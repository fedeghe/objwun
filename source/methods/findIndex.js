function findIndex(x, fn) {
    var what = core.mustBe.objOrArr(x);
    core.mustBe.func(fn);

    if (what.isArr) {
        return x.findIndex(fn);
    }
    var keys = Object.keys(x),
        fi = keys.findIndex(function (k) { return fn(x[k])});
    return fi >= 0 ? keys[fi] : -1; 
}