function sortBy(o, kf, vrs) {
    core.mustBe.arr(o);
    var what = core.mustBe.funcOrStr(kf),
        // for purity
        res = [].concat(o);
    vrs = vrs || 1;
    core.mustBe.num(vrs);

    return what.isFunc
        ? res.sort(function (a, b) {
            return kf(a) < kf(b) ? -vrs : vrs;
        })
        : res.sort(function (a, b) {
            return a[kf] < b[kf] ? -vrs : vrs;
        });
}