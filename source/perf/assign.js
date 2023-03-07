var ow = require('../../dist'),
    _ = require('lodash'),
    testone = require('@fedeghe/testone');

const o1 = [],
    o2 = {},
    o3 = [1,2,3,4,5, o1, {a: o1}],
    o4 = {z:[o1,o2,o3, {a: [o1,o2,o3]}]};

const assignObjwun = (...a) => ow.assign(...a),
    assign_ = (...a) => _.clone(...a)
    assignNative = (...a) => Object.assign.apply(null, a);
const r = assign_(o4)


testone([{
    in: [o4],
    out: r
}], [/*cloneObjwun, ow.clone, clonex, */assignObjwun, assign_, assignNative], {
    // plugins: [{
    //     fn: complex,
    //     options: {},
    //     // skipReport: true
    // }],
    metrics: {
        // c: ({pluginsResults}) => ({
        //     cyclomatic: pluginsResults.complex.complexity.methodAggregate.cyclomatic,
        //     difficulty: pluginsResults.complex.complexity.methodAggregate.halstead.difficulty,
        //     time: pluginsResults.complex.complexity.methodAggregate.halstead.time,
        //     volume: pluginsResults.complex.complexity.methodAggregate.halstead.volume,   
        // }),
        fx: ({mem: {single: mem}, time: {single: time}, ops}) => ({
            ops,
            time,
        })
    },
    iterations:1e5
}).then(
    res => {
        console.log(res)
        console.log(res.report)
        console.log(JSON.stringify(res.metrics, null, 2))
    }
)
        
