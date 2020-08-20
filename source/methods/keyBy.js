function keyBy(ar, kf) {
    var res = {},
        i = 0,
        l = ar.length;
    if (typeof kf === 'function') {
        for (; i < l; i++) {
            res[kf(ar[i])] = ar[i]
        }
    } else {
        for (; i < l; i++) {
            res[ar[i][kf]] = ar[i]
        }
    }
    return res;
}