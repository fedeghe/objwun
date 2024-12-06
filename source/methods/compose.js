// 2 -> 1 -> 0
function compose () {
    var fns = core.ut.args2arr(arguments);
    fns.forEach(function (fn){ return core.mustBe.func(fn) });
    return function () {
        return fns.reduceRight(function(acc, fn){
            return fn.apply(null, Array.isArray(acc) ? acc : [acc]);
        }, core.ut.args2arr(arguments));
    };
}
