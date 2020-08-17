function filter(a, fn) {
    var res = [];
    for (var i = 0, l = a.length; i < l; i++) {
        if (fn(a[i], i)) {
            res.push(a[i])
        }
    }
    return res;
}