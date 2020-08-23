function sortBy(o, kf, vrs) {
    core.mustBe.arr(o)
    core.mustBe.funcOrStr(kf)
    // for purity
    var res = [].concat(o)
    vrs = vrs || 1
    return (typeof kf === 'function') 
        ? res.sort(function (a, b) {
            return kf(a) < kf(b) ? -vrs : vrs
        })
        : res.sort(function (a, b) {
            return a[kf] < b[kf] ? -vrs : vrs
        })
}