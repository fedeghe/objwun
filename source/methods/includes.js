function includes(x, el) {
    var what = core.mustBe.objOrArr(x);
    core.mustBe.defined(el);
    if (what.isArr) return x.includes(el);
    for (var k in x) 
        if (x.hasOwnProperty(k) && x[k] === el)
            return true;
    return false;
}