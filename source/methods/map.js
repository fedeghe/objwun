function map(o, func) {
    if (!core.in.isObjOrArr(o)) throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED)
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