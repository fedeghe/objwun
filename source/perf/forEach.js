var ow = require('../../dist'),
    _ = require('lodash'),
    testone = require('@fedeghe/testone'),
    complex = require('testone-complexity-plugin');

const _forEach = (a, k) => {
    var s = 0;
    _.forEach(a, i => s += i[k]);
    return s;
}
const owforEach = (a, k) => {
    var s = 0;
    ow.forEach(a, i => s += i[k]);
    return s;
}
const nativeforEach = (a, k) => {
    var s = 0;
    a.forEach(i => s += i[k]);
    return s;
}

const size = 1e4
const o = Array.from({length:size}, (_, i) => ({n:i+1}))
const r = (size * (size+1))/2


testone([{
    in: [o, 'n'],
    out: r
}], [/*cloneObjwun, ow.clone, clonex, */_forEach, owforEach, nativeforEach], {
    metrics: {
        fx: ({mem: {single: mem}, time: {single: time}}) => ({
            op: 1000/time,
            time,
        })
    },
    iterations:1e4
}).then(
    ({metrics}) => console.log(JSON.stringify(metrics, null, 2))
)
        
