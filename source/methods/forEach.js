function forEach(o, func) {    
    core.mustBe.objOrArr(o)
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
