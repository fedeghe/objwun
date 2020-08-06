function pick(o, add) {
    var res = {};
    add = add || [];
    for(var i in o)
        if (o.hasOwnProperty(i) && add.indexOf(i) >= 0)
            res[i] = o[i];
    return res;
}