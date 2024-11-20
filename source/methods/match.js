function match(o1, o2, sorted) {
    sorted = Boolean(sorted)
    var sort = function(o) {
        return Object.keys(o).sort().reduce(
            function(acc, key){ 
                acc[key] = core.isObject(o[key]) ? sort(o[key]) : o[key];
                return acc;
            }, {}
        )};
    return sorted
        ? JSON.stringify(sort(o1)) === JSON.stringify(sort(o2))
        : JSON.stringify(o1) === JSON.stringify(o2)
}