function _(){
    maltaF('core/index.js');

    maltaF('methods/assign.js');
    maltaF('methods/filter.js');
    maltaF('methods/forEach.js');
    maltaF('methods/get.js');
    maltaF('methods/id.js');
    maltaF('methods/includes.js');
    maltaF('methods/isEmpty.js');
    maltaF('methods/map.js');
    maltaF('methods/omit.js');
    maltaF('methods/pick.js');
    maltaF('methods/reduce.js');
    maltaF('methods/some.js');
    maltaF('methods/times.js');
    maltaF('methods/uniq.js');
    
    return {
        assign: assign,
        filter: filter,
        forEach: forEach,
        get: get,
        id: id,
        includes: includes,
        isEmpty: isEmpty,
        map: map,
        omit: omit,
        pick: pick,
        reduce: reduce,
        some: some,
        times: times,
        uniq: uniq,
    }
}