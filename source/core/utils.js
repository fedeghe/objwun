

function args2arr(a) {
    return [].slice.call(a, 0);
}

function pick_omit(func) {
    return function (o, x) {
        var res = {};
        x = x || [];
        for (var i in o)
            if (o.hasOwnProperty(i) && func(x.indexOf(i)))
                res[i] = o[i];
        return res;
    }
}

function objLoop(o, fn) {
    var res = {};
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            res[i] = fn(o[i], i)
        }
    }
    return res;
}

function arrLoop(o, fn) {
    var res = [],
        i = 0,
        l = o.length;
    for (null; i < l; i++) {
        res[i] = fn(o[i], i)
    }
    return res;
}

core.ut = {
    args2arr: args2arr,
    arrLoop: arrLoop,
    objLoop: objLoop,
    pick_omit: pick_omit,
};

