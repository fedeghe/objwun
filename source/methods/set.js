function set(obj, path, value) {
    core.mustBe.objOrArr(obj);
    core.mustBe.str(path);
    core.mustBe.defined(value);
    path = path.replace(
        /\[(\d+)\]/g,
        function (a, dec) {
            return '.' + dec;
        }
    );
    var els = path.split('.'),
        res = core.ut.clone(obj),
        i = 0,
        l = els.length,
        tmp = res;
        
    for (null; i < l-1; i++) { 
        if (!(els[i] in tmp) || core.in.isPrimitive(tmp[els[i]])) {
            //if next key is a number create an array, or use an obj
            tmp[els[i]] = els[i+1].match(/\d+/) ? [] : {};
        }
        tmp = tmp[els[i]];
    }
    // finally
    tmp[els[i]] = core.in.isPrimitive(value) ? value : core.ut.clone(value);
    return res;
}