function reduce(o, fn, initial) {
    var what = core.mustBe.objOrArr(o);
    core.mustBe.func(fn);
    var res = initial || (what.isObj ? {} : []);

    return what.isObj
        ? Object.keys(o).reduce( function(acc, k, i, ob) { return fn(acc, o[k], k, o);}  , res)
        : o.reduce(fn, res);
}
