var assert = require('assert'),
    objwun = require('../dist');

describe('pick', function () {
    it('should return an empty obj', function () {
        var o = { a: 1, b: 2, c: 3 },
            res = objwun.pick(o)
        assert.equal(JSON.stringify(res), JSON.stringify({}));
    });
    it('should return it without some', function () {
        var o = { a: 1, b: 2, c: 3 },
            res = objwun.pick(o, ['a', 'c', 'd']);
        assert.equal(JSON.stringify(res), JSON.stringify({ a: 1, c: 3 }));
    });
});
