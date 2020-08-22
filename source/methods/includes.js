function includes(o, el) {
    var res = false;
    core.mustBe.arr(o)
    core.mustBe.defined(el)
    for (var i = 0, l = o.length; i < l; i++)
        if (o[i] === el) {
            return true
        } else {
            continue
        }
    return res;
}