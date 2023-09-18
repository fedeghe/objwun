const ow = require('../../dist');

describe('set', () => {
    test('should set basic', () => {
        var o = [],
            res = ow.set(o, '0.t', 1)
        expect(JSON.stringify(res)).toEqual( JSON.stringify([{t: 1}]));
    });
    test('should set bit more advanced/deeper', () => {
        var o = {
                a:1,
                b: {
                    c: {
                        d:'fede',
                        surname: 'ghe'
                    }
                }
            },
            res = ow.set(o, 'a.s.t', 1)
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({
                a:{
                    s: {
                        t: 1
                    }
                },
                b: {
                    c: {
                        d:'fede',
                        surname: 'ghe'
                    }
                }
            })
        );
    });
    test('should set bit more advanced/deeper similar', () => {
        var o = {
                a: {
                    b: 2
                },
                b: {
                    c: {
                        d:'fede',
                        surname: 'ghe'
                    }
                }
            },
            res = ow.set(o, 'a.s.t', 1)
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({
                a:{
                    b: 2,
                    s: {
                        t: 1
                    }
                },
                b: {
                    c: {
                        d:'fede',
                        surname: 'ghe'
                    }
                }
            })
        );
    });
    test('should set bit more advanced/deeper with array keys', () => {
        var o = {
                a: {
                    b: 2
                },
                b: {
                    c: {
                        d:'fede',
                        surname: 'ghe'
                    }
                }
            },
            res = ow.set(o, 'a.s.t.4', {just:{one: 'obj'}})
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({
                a:{
                    b: 2,
                    s: {
                        t: [null,null, null ,null, {just:{one: 'obj'}}]
                    }
                },
                b: {
                    c: {
                        d:'fede',
                        surname: 'ghe'
                    }
                }
            })
        );
    });
    test('should set bit more advanced/deeper with array keys on existing one', () => {
        var o = {
                a: {
                    b: 2,
                    s: [1,2,3]
                },
                b: {
                    c: {
                        d:'fede',
                        surname: 'ghe'
                    }
                }
            },
            res = ow.set(o, 'a.s[1]', 'hello')
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({
                a: {
                    b: 2,
                    s: [1,'hello',3]
                },
                b: {
                    c: {
                        d:'fede',
                        surname: 'ghe'
                    }
                }
            })
        );
    });

    test('should prevent prototype pollution, first level', () => {
        var o = { num: 10 },
            res = ow.set(o, 'prototype', String.prototype);
        res = ow.set(res, '__proto__', {polluted: true});
        res = ow.set(res, 'constructor', {again: 'polluted'});
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({
                num:10
            })
        );
    });
    
    test('should prevent prototype pollution, deeper', () => {
        var o = { num: 10 },
            res = ow.set(o, 'prototype.foo', 'what');
        res = ow.set(res, '__proto__.polluted', {polluted: true});
        res = ow.set(res, 'constructor.foo', {again: 'polluted'});
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({
                num:10
            })
        );
    });

    test('should throw an error for the bad argument', () => {
        try {
            ow.set(false, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, object or array expected");
        }
    });
    
    test('should throw an error for the missing argument', () => {
        try {
            ow.set([])
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, string expected");
        }
    });

    test('should throw an error for the missing value', () => {
        try {
            ow.set([], '1.2.3.4')
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Missing expected argument");
        }
    });
    
    test('∂ should be a pure function', () => {
        const o = [{a: 1},    
                {s: 10}, 3,    
                null, {a: 1},    
                {a: 1234567}, {d: {e:[1,2,3,4]}}
            ],
            res = ow.set(o, '1.s', 11);
        expect(JSON.stringify(res)).toEqual( JSON.stringify([{a: 1},    
            {s: 11}, 3,    
            null, {a: 1},    
            {a: 1234567}, {d: {e:[1,2,3,4]}}
        ]));
        expect(JSON.stringify(o)).toEqual( JSON.stringify([{a: 1},    
            {s: 10}, 3,    
            null, {a: 1},    
            {a: 1234567}, {d: {e:[1,2,3,4]}}
        ]));
    });
});
