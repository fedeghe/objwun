function assign() {
    // @filter
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    var args = core.ut.args2arr(arguments),
        res = {},
        i = -1,
        l = args.length,
        j;

    if (l) {
        while (++i < l){
            core.mustBe.obj(args[i]);
            for(j in args[i])
                if (args[i].hasOwnProperty(j)) {
                    res[j] = JSON.parse(JSON.stringify(args[i][j]));
                }
        }
    }
    return res;
}