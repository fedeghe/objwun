var ow = require('../../dist'),
    _ = require('lodash'),
    testone = require('@fedeghe/testone'),
    complex = require('testone-complexity-plugin');

const o = {
    a: {
        b: {
            c: {
                d: 1
            },
            d: 2
        }
    }
}

const cloneObjwun = a => ow.clone(a),
    clone_ = a => _.clone(a);

testone([{
    in: [{}],
    out: {}
},{
    in: [[]],
    out: []
},{
    in: [o],
    out: o
}], [cloneObjwun, clone_], {
    plugins: [{
        fn: complex,
        options: {},
        skipReport: true
    }],
    metrics: {
        c: ({pluginsResults}) => ({
            cyclomatic: pluginsResults.complex.complexity.methodAggregate.cyclomatic
        }),
        sp: ({mem: {single: mem}, time: {single: time}}) => time * mem
    },
    iterations:1e5
}).then(res => {
    console.log(JSON.stringify(res.metrics, null, 2))
})
        
