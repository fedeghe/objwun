var assert = require('assert'),
    ow = require('../dist');

describe('pick', function () {
    it('should return an empty obj', function () {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.pick(o)
        assert.equal(JSON.stringify(res), JSON.stringify({}));
    });
    it('should return it without some', function () {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.pick(o, ['a', 'c', 'd']);
        assert.equal(JSON.stringify(res), JSON.stringify({ a: 1, c: 3 }));
    });
    it('should return the whole', function () {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.pick(o, ['a', 'b', 'c', null]);
        assert.equal(JSON.stringify(res), JSON.stringify({ a: 1, b: 2, c: 3 }));
    });
});
