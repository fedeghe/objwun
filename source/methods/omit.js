function omit(o, rem) {
    var res = {};
    rem = rem || [];
    for(var i in o)
        if (o.hasOwnProperty(i) && rem.indexOf(i) < 0)
            res[i] = o[i];
    return res;
}