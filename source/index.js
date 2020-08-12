function _(){
    maltaF('core/index.js');
    maltaF('methods/assign.js');
    maltaF('methods/times.js');
    maltaF('methods/omit.js');
    maltaF('methods/pick.js');
    maltaF('methods/map.js');
    maltaF('methods/reduce.js');
    maltaF('methods/isEmpty.js');
    maltaF('methods/get.js');
    return {
        assign: assign,
        get: get,
        isEmpty: isEmpty,
        map: map,
        omit: omit,
        pick: pick,
        reduce: reduce,
        times: times
    }
}