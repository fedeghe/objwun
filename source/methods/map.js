function map(o, func) {
    var res = [];
    func = func || function (obj){return obj;};
    if (core.in.isObj(o)) {
        return core.ut.objLoop(o, func)
    }
    if (core.in.isArr(o)){
        return core.ut.arrLoop(o, func)
    }
    return res;
}