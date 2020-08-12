function map(o, func) {
    var res = [];
    func = func || function (obj){res.push(obj)};
    if (core.introspection.isObject(o)) {
        return core.utils.objLoop(o, func)
    }
    if (core.introspection.isArray(o)){
        return core.utils.arrayLoop(o, func)
    }
    return res;
}