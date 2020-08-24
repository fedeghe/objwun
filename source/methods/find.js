function find(a, fn) {
    core.mustBe.arr(a)
    core.mustBe.func(fn)
    var res = -1;
    for (var i = 0, l = a.length; res === -1 && i < l; i++) {
        if (fn(a[i], i)){
            res = i
        }
    }
    return res;
}