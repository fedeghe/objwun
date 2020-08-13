var assert = require('assert'),
    ow = require('../dist');

describe('reduce', function () {
    var o = {
            a: 1, b: 2,
            c: 3, d: 4
        },
        a = [1, 2, 3, 4];
    it('should return an empty array', function () {
        assert.equal(JSON.stringify(ow.reduce()), '[]');
        assert.equal(JSON.stringify(ow.reduce(null)), '[]');
        assert.equal(JSON.stringify(ow.reduce([])), '[]');
    });
    it('should return an empty object', function () {
        assert.equal(JSON.stringify(ow.reduce({})), '{}');
    });
    it('should behave like a filter on object', function () {
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
        assert.equal(JSON.stringify(even), JSON.stringify({b:2, d: 4}));
        assert.equal(JSON.stringify(odd), JSON.stringify({a:1, c: 3}));
    });
    it('should behave like a filter on array', function () {
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
        // assert.equal(JSON.stringify(even), JSON.stringify([2, 4]));
        assert.equal(JSON.stringify(odd), JSON.stringify([1, 3]));
    });
    it('should allow to build a composing function', function () {
        var mult3 = a => a * 3,
            pow2 = a => Math.pow(a, 2),
            divide2 = a => a / 2,
            composed = ow.reduce(
                [mult3, pow2, divide2],
                (acc, el) => (...args) => el(acc(...args)),
                a => a
            );
        assert.equal(composed(2), 18);
    });
});
