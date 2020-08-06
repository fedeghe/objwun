function _(){
    maltaF('core/index.js');
    maltaF('methods/assign.js');
    maltaF('methods/times.js');
    maltaF('methods/omit.js');
    maltaF('methods/pick.js');
    return {
        assign: assign,
        times: times,
        omit: omit,
        pick: pick
    }
}