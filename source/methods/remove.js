function remove(a, x) {
    core.mustBe.arr(a);
    var what = core.mustBe.funcOrArr(x),
        res = [].concat(a),
        xsort;
    if (what.isFunc) {
        for (var i = 0; i < res.length; null) {
            if (x(res[i], i)) {
                res = res.slice(0, i).concat(res.slice(i+1));
            } else {
                i++;
            }
        }
    } else {
        // isArray
        xsort = [].concat(x).sort(function(a, b){return  a > b ? -1: 1}); //reversed
        for (var i = 0, l = xsort.length;i < l; i++) {
            res = res.slice(0, xsort[i]).concat(res.slice(xsort[i]+1));
        }
    }
    return res;
}