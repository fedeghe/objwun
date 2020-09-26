function find(a, fn) {
    core.mustBe.arr(a)
    core.mustBe.func(fn)
    var i = -1,
        l = a.length;
    while (++i < l) {
        if (fn(a[i], i)){
            return i
        }
    }
    return -1;
}