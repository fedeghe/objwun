function some(a, fn) {
    core.mustBe.arr(a)
    core.mustBe.func(fn)
    for (var i = 0, l = a.length; i < l; i++) {
        if (fn(a[i], i)) {
            return true
        }
    }
    return false;
}