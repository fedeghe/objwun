function match(o1, o2) {
    core.mustBe.objOrArr(o2);
    var type1 = core.mustBe.objOrArr(o1),
        type2 = core.mustBe.objOrArr(o2);
    if (
        (type1.isObj && type2.isArr)
        ||
        (type1.isArr && type2.isObj)
    ) return false
    return JSON.stringify(o1) === JSON.stringify(o2)
}