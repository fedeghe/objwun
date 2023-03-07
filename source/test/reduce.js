var assert = require('assert'),
    ow = require('../dist');

describe('reduce', () => {
    var o = {
            a: 1, b: 2,
            c: 3, d: 4
        },
        a = [1, 2, 3, 4];
    
    it('should behave like a basic summer', () => {
        var sum = ow.reduce(o,
            (acc, el) => {
                return acc + el
            }, 0
        );
        assert.strictEqual(sum, 1 + 2 + 3 + 4);
    });

    it('should behave like a filter on object', () => {
        var even = ow.reduce(o,
                (acc, el, k) => {
                    if (el % 2 === 0) acc[k] = el;
                    return acc
                }, {}
            ),
            odd = ow.reduce(o,
                (acc, el, k) => {
                    if (el % 2 === 1) acc[k] = el;
                    return acc
                }
            );
        assert.strictEqual(JSON.stringify(even), JSON.stringify({b:2, d: 4}));
        assert.strictEqual(JSON.stringify(odd), JSON.stringify({a:1, c: 3}));
    });

    it('should behave like a filter on array', () => {
        var even = ow.reduce(a,
                (acc, el, k) => {
                    if (el % 2 === 0) acc.push(el);
                    return acc
                }, []
            ),
            odd = ow.reduce(a,
                (acc, el, k) => {
                    if (el % 2 === 1) acc.push(el);
                    return acc
                }
            );
        assert.strictEqual(JSON.stringify(even), JSON.stringify([2, 4]));
        assert.strictEqual(JSON.stringify(odd), JSON.stringify([1, 3]));
    });
    
    it('should allow to build a composing function', () => {
        var mult3 = a => a * 3,
            pow2 = a => Math.pow(a, 2),
            divide2 = a => a / 2,
            composed = ow.reduce(
                [mult3, pow2, divide2],
                (acc, el) => (...args) => el(acc(...args)),
                a => a
            );
        assert.strictEqual(composed(2), 18);
    });

    it('should allow to escape', () => {
        var mult3 = a => a * 3,
            pow2 = a => Math.pow(a, 2),
            divide2 = a => a / 2,
            composed = ow.reduce(
                [mult3, pow2, divide2],
                (acc, el) => (...args) => el(acc(...args)),
                a => a,
                (_, e) => e.name === 'pow2'
            );
        assert.strictEqual(composed(2), 6);
    });


    it('should throw an error for the non object or array argument', () => {
        try {
            ow.reduce(3, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object or array expected");
        }
    });
    it('should throw an error for the non function argument', () => {
        try {
            ow.reduce({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });

    it('should throw an error if the escape is not a function', () => {
        try {
            ow.reduce({}, () => {}, 0, 'not a function')
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });

    it('∂ should be a pure function', () => {
        var o = {a:1, b:2, c:3},
            res = ow.reduce(o, ((acc, el) => {
                acc*=el;
                return acc
            }), 1 );
        assert.strictEqual(res, 6);
        assert.strictEqual(JSON.stringify(o), JSON.stringify({a:1, b:2, c:3}));
    });   
});
