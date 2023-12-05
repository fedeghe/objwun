var objwun = (function() {
    maltaF('core/index.js');

    maltaF('methods/assign.js');
    maltaF('methods/clone.js');
    maltaF('methods/debounce.js');
    maltaF('methods/every.js');
    maltaF('methods/filter.js');
    maltaF('methods/find.js');
    maltaF('methods/findIndex.js');
    maltaF('methods/forEach.js');
    maltaF('methods/fromEntries.js');
    maltaF('methods/get.js');
    maltaF('methods/getMapper.js');
    maltaF('methods/id.js');
    maltaF('methods/includes.js');
    maltaF('methods/intersection.js');
    maltaF('methods/isEmpty.js');
    maltaF('methods/keyBy.js');
    maltaF('methods/map.js');
    maltaF('methods/memoize.js');
    maltaF('methods/merge.js');
    maltaF('methods/omit.js');
    maltaF('methods/pick.js');
    maltaF('methods/reduce.js');
    maltaF('methods/remove.js');
    maltaF('methods/some.js');
    maltaF('methods/set.js');
    maltaF('methods/sortBy.js');
    maltaF('methods/times.js');
    maltaF('methods/uniq.js');
    maltaF('methods/uniqBy.js');

    return {
        assign: assign,
        clone: clone,
        debounce: debounce,
        every: every,
        filter: filter,
        find: find,
        findIndex: findIndex,
        forEach: forEach,
        fromEntries: fromEntries,
        get: get,
        getMapper: getMapper,
        id: id,
        includes: includes,
        intersection: intersection,
        isEmpty: isEmpty,
        keyBy: keyBy,
        map: map,
        memoize: memoize,
        merge: merge,
        omit: omit,
        pick: pick,
        reduce: reduce,
        remove: remove,
        set: set,
        some: some,
        sortBy: sortBy,
        times: times,
        uniq: uniq,
        uniqBy: uniqBy,

        isArray: core.in.isArr,
        isBigint: core.in.isBigint,
        isFunction: core.in.isFunc,
        isObject: core.in.isObj,
        isString: core.in.isStr,
        isBoolean: core.in.isBool,
        isNumber: core.in.isNum,
        isUndefined: core.in.isUndef,
        isDefined: core.in.isDef,
        isSymbol: core.in.isSymbol,
        isPrimitive: core.in.isPrimitive, 
        core: core,
    }
})();
(typeof exports === 'object') && (module.exports = objwun);