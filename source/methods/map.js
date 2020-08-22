function map(o, func) {
    core.mustBe.objOrArr(o)
    func = func || function (obj){return obj;};
    if (core.in.isObj(o)) {
        return core.ut.objLoop(o, func)
    }
    // thus array
    return core.ut.arrLoop(o, func)
}