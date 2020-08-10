function map(o, func) {

    var res = [];
    func = func || function (obj){res.push(obj)};
    if (core.isObject(o)) {
        return core.objLoop(o, func)
    }
    if (core.isArray(o)){
        return core.arrayLoop(o, func)
    }
    return res;
}