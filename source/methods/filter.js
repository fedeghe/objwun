function filter(x, fn) {
    var what = core.mustBe.objOrArr(x);
    core.mustBe.func(fn);
    if (what.isArr) return x.filter(fn);
    var ks = Object.keys(x);
    return ks.reduce(function (acc, el, i) {
        if (fn(x[el], ks[i], x)) {
            acc[ks[i]] = x[el];
        }
        return acc;
    }, {});
}