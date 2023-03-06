var ow = require('../../dist'),
    _ = require('lodash'),
    testone = require('@fedeghe/testone');

const o = [{
    a: {
        b: {
            c: {
                d: 1,
                l: {
                    a: {
                        b: {
                            c: {
                                d: 1
                            },
                            d: 2,
                            dfgd: {
                                a:[
                                    1,2,3,4,
                                    [
                                        {},
                                        23423,
                                        33,
                                        {
                                            werwe: [1,234,1234]
                                        }
                                    ]
                                ]
                            }
                        }
                    }
                }
            },
            d: 2,
            dfgd: {
                a:[
                    1,2,3,4,
                    [
                        {},
                        23423,
                        33,
                        {
                            werwe: [1,234,1234,{
                                a: {
                                    b: {
                                        c: {
                                            d: 1
                                        },
                                        d: 2,
                                        dfgd: {
                                            a:[
                                                1,2,3,4,
                                                [
                                                    {},
                                                    23423,
                                                    33,
                                                    {
                                                        werwe: [1,234,1234,{
                                                            a: {
                                                                b: {
                                                                    c: {
                                                                        d: 1
                                                                    },
                                                                    d: 2,
                                                                    dfgd: {
                                                                        a:[
                                                                            1,2,3,4,
                                                                            [
                                                                                {},
                                                                                23423,
                                                                                33,
                                                                                {
                                                                                    werwe: [1,234,1234,{
                                                                                        a: {
                                                                                            b: {
                                                                                                c: {
                                                                                                    d: 1
                                                                                                },
                                                                                                d: 2,
                                                                                                dfgd: {
                                                                                                    a:[
                                                                                                        1,2,3,4,
                                                                                                        [
                                                                                                            {},
                                                                                                            23423,
                                                                                                            33,
                                                                                                            {
                                                                                                                werwe: [1,234,1234]
                                                                                                            }
                                                                                                        ]
                                                                                                    ]
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }]
                                                                                }
                                                                            ]
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        }]
                                                    }
                                                ],
                                                {
                                                    werwe: [1,234,1234,{
                                                        a: {
                                                            b: {
                                                                c: {
                                                                    d: 1
                                                                },
                                                                d: 2,
                                                                dfgd: {
                                                                    a:[
                                                                        1,2,3,4,
                                                                        [
                                                                            {},
                                                                            23423,
                                                                            33,
                                                                            {
                                                                                werwe: [1,234,1234]
                                                                            }
                                                                        ]
                                                                    ]
                                                                }
                                                            }
                                                        }
                                                    }]
                                                }
                                            ]
                                        }
                                    }
                                },
                                xxx: {
                                    werwe: [1,234,1234,{
                                        a: {
                                            b: {
                                                c: {
                                                    d: 1
                                                },
                                                d: 2,
                                                dfgd: {
                                                    a:[
                                                        1,2,3,4,
                                                        [
                                                            {},
                                                            23423,
                                                            33,
                                                            {
                                                                werwe: [1,234,1234]
                                                            }
                                                        ]
                                                    ]
                                                }
                                            }
                                        }
                                    }]
                                }
                            }]
                        }
                    ]
                ]
            }
        }
    }
}]

const cloneObjwun = a => ow.clone(a),
    clone_ = a => _.clone(a),
    cloneStructured = a => {
        const proto = Object.getPrototypeOf(a)
        const newObject = structuredClone(a)
        Object.setPrototypeOf(newObject, proto)
        return newObject
    },
    cloneJsonBased = a => {
        return JSON.parse(JSON.stringify(a))
    };
const r = JSON.parse(JSON.stringify(o))

testone([{
    in: ({iteration}) => {
        // console.log(iteration)
        o[0].a.b.c.d = iteration; return [o]
    },
    out: r
}], [/*cloneObjwun, ow.clone, clonex, */cloneObjwun, clone_, cloneStructured, cloneJsonBased], {
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
    matcher: ({expected, received}) => {
        console.log({expected: expected[0].a.b.c.d, received: received[0].a.b.c.d});
        return expected[0].a.b.c.d == received[0].a.b.c.d
    }
    // iterations:1
}).then(
    r => {
        const {metrics: {fx}} = r;
        console.log(r)
        console.log(JSON.stringify(fx, null, 2))
    }
)
        
