function forEach(o, func) {    
    var what = core.mustBe.objOrArr(o);
    func = func || function (e) {
        return e;
    };
    return what.isObj 
        ? core.ut.objLoop(o, func)
        : core.ut.arrLoop(o, func);
}
