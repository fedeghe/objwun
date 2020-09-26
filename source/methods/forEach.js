function forEach(o, func) {    
    var what = core.mustBe.objOrArr(o)
    func = func || function (e) {
        return e
    }
    if (what.isObj) {
        return core.ut.objLoop(o, func)
    }
    if (what.isArr){
        return core.ut.arrLoop(o, func)
    }
}
