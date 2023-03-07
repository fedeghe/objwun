var ow = require('../../dist'),
    _ = require('lodash'),
    testone = require('@fedeghe/testone'),
    complex = require('testone-complexity-plugin');

function areduce(arr, fn, initial) {
    var acc = initial;
    for (var i = 0, l = arr.length; i < l; i++) acc = fn(acc, arr[i], i, arr);
    return acc;
}


const _reduce = (a, fn, i) => _.reduce(a, fn, i)
const owreduce = (a, fn, i) => ow.reduce(a, fn, i)
const owareduce = (a, fn, i) => areduce(a, fn, i)
const nativeReduce = (a, fn, i) => a.reduce(fn, i)

const o = Array.from({length:1e4}, () => ({n: ~~(Math.random()*1000)}));
const sumAcc = (acc, e) => acc + e.n;
const sumAll = o.reduce(sumAcc, 0);

testone([{
    in: [o, sumAcc, 0],
    out: sumAll
}], [_reduce, owreduce, owareduce, nativeReduce], {
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
