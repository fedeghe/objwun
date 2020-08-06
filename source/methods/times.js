function times(n, func) {
    n = n || 0;
    var res = [],
        i = 0;
    for(null; i < n; i++)
        res[i] = func.call(null, i);
    return res;
}