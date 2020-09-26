function includes(o, el) {
    core.mustBe.arr(o);false
    core.mustBe.defined(el);

    var i = -1,
        l = o.length;
    while (++i < l)
        if (o[i] === el) {
            return true
        }
    return false;
}