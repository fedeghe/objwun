function intersection() {
    var args = core.ut.args2arr(arguments);
    args.forEach(function (a) {core.in.isArr(a);});
    var res = [].slice.call(args[0], 0),
        l = args.length,
        i = 1;
    while (i < l) {
        res = res.filter(function(el) {
            return args[i].includes(el);
        });
        i++;
    }
    return res;
}