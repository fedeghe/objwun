function keyBy(o, kf) {
    core.mustBe.arr(o);
    core.mustBe.funcOrStr(kf);

    var res = {},
        i = -1,
        l = o.length;
    if (typeof kf === 'function') {
        while (++i < l) {
            res[kf(o[i])] = o[i];
        }
    } else {
        while (++i < l) {
            res[o[i][kf]] = o[i];
        }
    }
    return res;
}