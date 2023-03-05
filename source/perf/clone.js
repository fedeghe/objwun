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
    clonez = a => structuredClone(a),
    clonex = a => {
        const proto = Object.getPrototypeOf(a)
        const newObject = structuredClone(a)
        Object.setPrototypeOf(newObject, proto)
        return newObject
    },
    clonej = a => {
        return JSON.parse(JSON.stringify(a))
    };
const r = JSON.parse(JSON.stringify(o))


testone([{
    in: [o],
    out: r
}], [/*cloneObjwun, ow.clone, clonex, */cloneObjwun, clone_, clonez, clonex, clonej], {
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
        fx: ({mem: {single: mem}, time: {single: time}}) => ({
            op: 1000/time,
            time,
        })
    },
    iterations:1e5
}).then(
    ({metrics}) => console.log(JSON.stringify(metrics, null, 2))
)
        
