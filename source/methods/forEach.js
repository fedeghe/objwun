function forEach(o, func) {
    if (!core.in.isObjOrArr(o)) throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED)
    func = func || function (e, i) {
        return e
    }
    var res;
    if (core.in.isObj(o)) {
        res = core.ut.objLoop(o, func)
    }
    if (core.in.isArr(o)){
        res = core.ut.arrLoop(o, func)
    }
    return res;

}
