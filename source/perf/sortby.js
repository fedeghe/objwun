var ow = require('../../dist'),
    _ = require('lodash'),
    testone = require('@fedeghe/testone'),
    complex = require('testone-complexity-plugin');

const _sortby = (a,b) => _.sortBy(a, b)
const owsortby = (a,b) => ow.sortBy(a, b)

const o = Array.from({length:1e4}, () => ({n: ~~(Math.random()*1000)}))
const ord = o.sort((a, b) => a.n - b.n)

const raw = (a, k) => {
    return a.sort((i, j) => i[k] - j[k])
}

testone([{
    in: [o, 'n'],
    out: ord
}], [/*cloneObjwun, ow.clone, clonex, */_sortby, owsortby, raw], {

    metrics: {
        fx: ({mem: {single: mem}, time: {single: time}, ops}) => ({
            ops,
            time,
        })
    },
    iterations:1e4
}).then(
    ({metrics}) => console.log(JSON.stringify(metrics, null, 2))
)  
