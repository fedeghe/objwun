// function clone(a) {
//     var what = core.mustBe.objOrArr(a),
//         v,
//         res = what.isArr ? [] : {};
//     for (var k in a) {
//         v = a[k];
//         res[k] = core.in.isObj(v) ? clone(v) : v;
//     }
//     return res;
// }

function clone(a) {
    var proto = Object.getPrototypeOf(a),
        newObject = structuredClone(a);
    Object.setPrototypeOf(newObject, proto);
    return newObject;
}