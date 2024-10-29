function matchs(o1, o2) {
    var type1 = core.mustBe.objOrArr(o1),
        type2 = core.mustBe.objOrArr(o2);
    if (
        (type1.isObj && type2.isArr)
        ||
        (type1.isArr && type2.isObj)
    ) return false
    return JSON.stringify(o1) === JSON.stringify(o2)
}

function match(o1, o2) {
    var type1Arr = core.in.isArr(o1),
        type1Obj = core.in.isObj(o1),
        type2Arr = core.in.isArr(o2),
        type2Obj = core.in.isObj(o2);
    if (type1Arr + type1Obj + type2Arr + type2Obj === 0) return o1 === o2;
    if ((type1Arr && type2Obj) || (type1Obj && type2Arr)) return false
    //both arr
    if (type1Arr) {
        return o1.every(function(e, i){
            return match(o1[i], o2[i])
        })
    } else { //must both be obj
        return Object.keys(o1).every(function(k){
            return match(o1[k], o2[k])
        })
    }
}