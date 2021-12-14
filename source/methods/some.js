function some(x, fn) {
    var what = core.mustBe.objOrArr(x);
    core.mustBe.func(fn);
    if (what.isArr) {
        for (var i = 0, l = x.length; i < l; i++) {
            if (fn(x[i], i)) {
                return true;
            }
        }
    } 
    for(var i in x) {
        if (x.hasOwnProperty(i) && fn(x[i], i)) {
            return true;
        }
    }
    return false;
}