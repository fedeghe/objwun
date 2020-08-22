function keyBy(o, kf) {
    core.mustBe.arr(o);
    core.mustBe.funcOrStr(kf);

    var res = {},
        i = 0,
        l = o.length;
    if (typeof kf === 'function') {
        for (; i < l; i++) {
            res[kf(o[i])] = o[i]
        }
    } else {
        for (; i < l; i++) {
            res[o[i][kf]] = o[i]
        }
    }
    return res;
}