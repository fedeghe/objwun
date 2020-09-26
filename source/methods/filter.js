function filter(a, fn) {
    core.mustBe.arr(a)
    core.mustBe.func(fn)
    var res = [],
        i = -1,
        l = a.length;
    while (++i < l) {
        fn(a[i], i) && res.push(a[i])
    }
    return res;
}