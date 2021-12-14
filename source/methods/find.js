function find(x, fn) {
    var what = core.mustBe.objOrArr(x);
    core.mustBe.func(fn);

    if(what.isArr)  return x.find(fn);
    var kz = Object.keys(x);
    
    return Object.values(x).find(function(v, k, x){
        return fn(v, kz[k], x);
    });
}