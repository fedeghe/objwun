var assert = require('assert'),
    ow = require('../../dist'),
    _ = require('lodash'),
    testone = require('@fedeghe/testone');

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
}], [cloneObjwun, clone_]).then(res => {
    console.log(res.times)
    assert(true)
})
        
