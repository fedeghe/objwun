var ow = require('../../dist'),
    _ = require('lodash'),
    testone = require('@fedeghe/testone'),
    complex = require('testone-complexity-plugin');

function oreduce(o, fn, initial) {
    var out = initial;
    for (var k in o){
        if (o.hasOwnProperty(k)){
            out = fn(out, o[k], k, out);
        }
    }
    return out;
}

const _reduce = (o, fn, i) => _.reduce(o, fn, i)
const owreduce = (a, fn, i) => oreduce(a, fn, i)

const o = Array.from({length:1e4}, () => ~~(Math.random()*1000))
    .reduce((acc, n) => {
        acc[n] = n;
        return acc
    }, {});
const sumAcc = (acc, e) => acc + e;
const sumAll = Object.values(o).reduce(sumAcc, 0);

testone([{
    in: [o, sumAcc, 0],
    out: sumAll
}], [_reduce, owreduce], {
    metrics: {
        fx: ({mem: {single: mem}, time: {single: time}, ops}) => ({
            ops,
            time,
        })
    }
}).then(
    // ({metrics}) => console.log(JSON.stringify(metrics, null, 2))
    res => console.log(JSON.stringify(res, null, 2))
)  
