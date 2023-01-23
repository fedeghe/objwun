function every(x, fn) {
    var what = core.mustBe.objOrArr(x);
    core.mustBe.func(fn);
    if (what.isArr) return x.every(fn);
    for (var i in x) {
        if (x.hasOwnProperty(i) && !fn(x[i], i)) {
            return false;
        }
    }
    return true;
}