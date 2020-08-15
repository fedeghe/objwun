function map(o, func) {
    var res = [];
    func = func || function (obj){return obj;};
    if (core.in.isObject(o)) {
        return core.utils.objLoop(o, func)
    }
    if (core.in.isArray(o)){
        return core.utils.arrayLoop(o, func)
    }
    return res;
}