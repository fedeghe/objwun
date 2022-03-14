function memoize(fn, ctx) {
    core.mustBe.func(fn)
    var m = new Map();
    ctx = ctx || null
    return function () {
        var a = [].slice.call(arguments),
            k = a.toString();
            // this represents a huge limitation, but if documented then it's clear

        !(m.has(k)) && m.set(k, fn.apply(ctx, a))
        return m.get(k)
    }
}