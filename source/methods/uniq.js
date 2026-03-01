function uniq(a) {
    var tmp = {},
        i = -1,
        l = a.length,
        res = [];
    while (++i < l) {
        tmp[a[i].toString()] = a[i];
    }
    for (var j in tmp) {
        res.push(tmp[j]);
    }
    return res;
}