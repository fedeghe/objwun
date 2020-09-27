function isEmpty(o) {
    core.mustBe.defined(o);
    
    return o === ''
        || o === null
        || (core.in.isStr(o) && o.length === 0)
        || (core.in.isArr(o) && o.length === 0)
        || (core.in.isObj(o) && (
            (function(){
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        return false;
                    } else {
                        continue;
                    }
                }
                return true;
            })()
        ));
}