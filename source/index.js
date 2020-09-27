var objwun = (function (){
    maltaF('core/index.js');

    maltaF('methods/assign.js');
    maltaF('methods/debounce.js');
    maltaF('methods/filter.js');
    maltaF('methods/find.js');
    maltaF('methods/forEach.js');
    maltaF('methods/get.js');
    maltaF('methods/id.js');
    maltaF('methods/includes.js');
    maltaF('methods/isEmpty.js');
    maltaF('methods/keyBy.js');
    maltaF('methods/map.js');
    maltaF('methods/omit.js');
    maltaF('methods/pick.js');
    maltaF('methods/reduce.js');
    maltaF('methods/remove.js');
    maltaF('methods/some.js');
    maltaF('methods/set.js');
    maltaF('methods/sortBy.js');
    maltaF('methods/times.js');
    maltaF('methods/uniq.js');
    
    return {
        assign: assign,
        debounce: debounce,
        filter: filter,
        find: find,
        forEach: forEach,
        get: get,
        id: id,
        includes: includes,
        isEmpty: isEmpty,
        keyBy: keyBy,
        map: map,
        omit: omit,
        pick: pick,
        reduce: reduce,
        remove: remove,
        set: set,
        some: some,
        sortBy: sortBy,
        times: times,
        uniq: uniq,

        isArray: core.in.isArr,
        isFunction: core.in.isFunc,
        isObject: core.in.isObj,
        isString: core.in.isStr,
        isBoolean: core.in.isBool,
        isNumber: core.in.isNum,
        isUndefined: core.in.isUndef,
        isDefined: core.in.isDef,
        isPrimitive: core.in.isPrim
    }
})();
(typeof exports === 'object') && (module.exports = objwun);
