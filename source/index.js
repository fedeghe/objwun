function _(){
    maltaF('core/index.js');
    maltaF('methods/assign.js');
    maltaF('methods/times.js');
    maltaF('methods/omit.js');
    maltaF('methods/pick.js');
    maltaF('methods/map.js');
    maltaF('methods/isEmpty.js');
    return {
        assign: assign,
        map: map,
        isEmpty: isEmpty,
        omit: omit,
        pick: pick,
        times: times
    }
}