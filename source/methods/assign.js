function assign() {
    var args = core.arguments2array(arguments).filter(function (o){
            return core.isObject(o)
        }),
        res = {};
    if (args.length) {
        args.forEach(function (obj) {
            res = Object.assign(res, obj)
        })
        return res;
    }
    return res;
}