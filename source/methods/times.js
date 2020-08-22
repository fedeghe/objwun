function times(n, func, ctx) {
    core.mustBe.num(n)
    core.mustBe.func(func)
    n = n || 0;
    ctx = ctx || null;
    var res = [],
        i = 0;
    for (null; i < n; i++)
        res[i] = func.call(ctx, i);
    return res;
}