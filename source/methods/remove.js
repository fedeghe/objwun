function remove(x, func) {    
    var what = core.mustBe.objOrArr(x);
    func = func || function (e) {
        return false;
    };
    core.mustBe.func(func);
    var res;
    if (what.isObj) {
        res = {};
        for (var k in x) {
            if (x.hasOwnProperty(k)) {
                if (func(x[k])) {
                    res[k] = x[k];
                    delete x[k];
                }
            }
        }
    } else {
        res = [];
        for (var k = 0, l = x.length; k < l; k++) {
            if (func(x[k], k)) {
                res.push(x[k]);
                x.splice(k, 1);
            }
        }
    }
    return res;
}
