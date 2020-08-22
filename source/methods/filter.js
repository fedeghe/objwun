function filter(a, fn) {
    core.mustBe.arr(a)
    core.mustBe.func(fn)
    var res = [];
    for (var i = 0, l = a.length; i < l; i++) {
        if (fn(a[i], i)) {
            res.push(a[i])
        }
    }
    return res;
}