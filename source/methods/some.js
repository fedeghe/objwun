function some(a, fn) {
    var res = false;
    for (var i = 0, l = a.length; i < l && !res; i++) {
        if (fn(a[i], i)) {
            res = true;
        }
    }
    return res;
}