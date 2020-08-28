var assert = require('assert'),
    ow = require('../dist');

describe('set', () => {
    it('should set basic', () => {
        var o = [],
            res = ow.set(o, '0.t', 1)
        assert.equal(JSON.stringify(res), JSON.stringify([{t: 1}]));
    });
    it('should set bit more advanced/deeper', () => {
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
        assert.equal(
            JSON.stringify(res),
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
    it('should set bit more advanced/deeper similar', () => {
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
        assert.equal(
            JSON.stringify(res),
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
    it('should set bit more advanced/deeper with array keys', () => {
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
        assert.equal(
            JSON.stringify(res),
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
    it('should set bit more advanced/deeper with array keys on existing one', () => {
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
        assert.equal(
            JSON.stringify(res),
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


    it('should throw an error for the bad argument', () => {
        try {
            ow.set(false, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object or array expected");
        }
    });
    
    it('should throw an error for the missing argument', () => {
        try {
            ow.set([])
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, string expected");
        }
    });

    it('should throw an error for the missing value', () => {
        try {
            ow.set([], '1.2.3.4')
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Missing expected argument");
        }
    });
    
    it('∂ should be a pure function', () => {
        const o = [{a: 1},    
                {s: 10}, 3,    
                null, {a: 1},    
                {a: 1234567}, {d: {e:[1,2,3,4]}}
            ],
            res = ow.set(o, '1.s', 11);
        assert.equal(JSON.stringify(res), JSON.stringify([{a: 1},    
            {s: 11}, 3,    
            null, {a: 1},    
            {a: 1234567}, {d: {e:[1,2,3,4]}}
        ]));
        assert.equal(JSON.stringify(o), JSON.stringify([{a: 1},    
            {s: 10}, 3,    
            null, {a: 1},    
            {a: 1234567}, {d: {e:[1,2,3,4]}}
        ]));
    });
});
