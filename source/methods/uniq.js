function uniq(a) {
    var tmp = {},
        i = 0,
        l = a.length,
        res = [];
    for (null; i < l; i++) {
        tmp[a[i].toString()] = a[i];
    }
    for (var j in tmp) {
        res.push(tmp[j]);
    }
    return res;
}