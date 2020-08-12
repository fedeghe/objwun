var assert = require('assert'),
    objwun = require('../dist');

describe('reduce', function () {
    var o = {
            a: 1, b: 2,
            c: 3, d: 4
        },
        a = [1, 2, 3, 4];
    it('should return an empty array', function () {
        assert.equal(JSON.stringify(objwun.reduce()), '[]');
        assert.equal(JSON.stringify(objwun.reduce(null)), '[]');
        assert.equal(JSON.stringify(objwun.reduce([])), '[]');
    });
    it('should return an empty object', function () {
        assert.equal(JSON.stringify(objwun.reduce({})), '{}');
    });
    it('should behave like a filter on object', function () {
        var even = objwun.reduce(o,
                function(acc, el, k) {
                    if (el % 2 === 0) acc[k] = el;
                    return acc
                }, {}
            ),
            odd = objwun.reduce(o,
                function(acc, el, k) {
                    if (el % 2 === 1) acc[k] = el;
                    return acc
                }
            );
        assert.equal(JSON.stringify(even), JSON.stringify({b:2, d: 4}));
        assert.equal(JSON.stringify(odd), JSON.stringify({a:1, c: 3}));
    });
    it('should behave like a filter on array', function () {
        var even = objwun.reduce(a,
                function(acc, el, k) {
                    if (el % 2 === 0) acc.push(el);
                    return acc
                }, []
            ),
            odd = objwun.reduce(a,
                function(acc, el, k) {
                    if (el % 2 === 1) acc.push(el);
                    return acc
                }
            );
        // assert.equal(JSON.stringify(even), JSON.stringify([2, 4]));
        assert.equal(JSON.stringify(odd), JSON.stringify([1, 3]));
    });
});
