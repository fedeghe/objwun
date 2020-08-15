function assign() {
    // @filter
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    var args = core.utils.arguments2array(arguments).filter(core.introspection.isObject),
        res = {};

    if (args.length) {
        // shallow copy
        for (var i = 0, l = args.length; i < l; i++)
            for(var j in args[i])
                if (args[i].hasOwnProperty(j))
                    res[j] = args[i][j]
        return res;
    }
    return res;
}