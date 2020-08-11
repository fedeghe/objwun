function assign() {
    var args = core.utils.arguments2array(arguments).filter(function (o){
            return core.introspection.isObject(o)
        }),
        res = {};
    if (args.length) {
        args.forEach(function (obj) {
            res = Object.assign({}, res, obj)
        })
        return res;
    }
    return res;
}