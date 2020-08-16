function _(){
    maltaF('core/index.js');

    maltaF('methods/assign.js');
    maltaF('methods/get.js');
    maltaF('methods/isEmpty.js');
    maltaF('methods/includes.js');
    maltaF('methods/map.js');
    maltaF('methods/omit.js');
    maltaF('methods/pick.js');
    maltaF('methods/reduce.js');
    maltaF('methods/times.js');
    
    return {
        assign: assign,
        get: get,
        isEmpty: isEmpty,
        includes: includes,
        map: map,
        omit: omit,
        pick: pick,
        reduce: reduce,
        times: times
    }
}