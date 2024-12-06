/*
function reduceForIdiots(o, fn, initial) {
    var what = core.mustBe.objOrArr(o);
    core.mustBe.func(fn);
    var res = initial || (what.isObj ? {} : []);

    return what.isObj
        ? Object.keys(o).reduce( function(acc, k, i, ob) { return fn(acc, o[k], k, o);}  , res)
        : o.reduce(fn, res);
}
*/
function reduce(o, fn, initial, esc) {
    var what = core.mustBe.objOrArr(o);
    core.mustBe.func(fn);
    esc && core.mustBe.func(esc);
    var res = core.in.isDef(initial) ? initial : (what.isObj ? {} : []);

    function _reduce(arr, fn, init, exitFn) {
        var acc = init,
            i = 0,
            l = arr.length;
        if (exitFn) {
            for (null; i < l; i++) {
                if (exitFn(acc, arr[i], i, arr)) break;
                acc = fn(acc, arr[i], i, arr);
            }
        } else {
            for (null; i < l; i++) {
                acc = fn(acc, arr[i], i, arr);
            }
        }
        return acc;
    };

    return _reduce.apply(null, what.isObj
        ? [Object.keys(o), function(acc, k, i, ob) { return fn(acc, o[k], k, o);}, res, esc]
        : [o, fn, res, esc]
    );
}
