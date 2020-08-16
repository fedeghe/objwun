function map(o, func) {
    var res = [];
    func = func || function (obj){return obj;};
    if (core.in.isObject(o)) {
        return core.ut.objLoop(o, func)
    }
    if (core.in.isArray(o)){
        return core.ut.arrLoop(o, func)
    }
    return res;
}