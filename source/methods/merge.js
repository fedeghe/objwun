function merge() {
    var objs = core.ut.args2arr(arguments);
    if (core.in.isArr(objs[0])) {
        forEach(objs, core.mustBe.arr);
        return reduce(objs, function (acc, obj) {
            acc = acc.concat(clone(obj));
            return acc;
        }, []);
    } else if (core.in.isObj(objs[0])) {
        forEach(objs, core.mustBe.obj);
        return reduce(objs, function (acc, obj) {
            for (var k in obj) {
                acc[k] = core.in.isPrimitive(obj[k]) ? obj[k] : clone(obj[k]);
            }
            return acc;
        }, {});
    } else {
        return null;
    }
}