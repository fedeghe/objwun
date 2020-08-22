function assign() {
    // @filter
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    var args = core.ut.args2arr(arguments),
        res = {};

    if (args.length) {
        for (var i = 0, l = args.length, j; i < l; i++){
            core.mustBe.obj(args[i])
            for(j in args[i])
                if (args[i].hasOwnProperty(j)) {
                    res[j] = args[i][j]
                } else {
                    continue
                }
        }
        return res;
    }
    return res;
}