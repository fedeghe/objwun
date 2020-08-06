var assert = require('assert'),
    objwun = require('../dist');

describe('omit', function () {
    it('should return it as it is', function () {
        var o = {a:1,  b:2, c:3},
            res = objwun.omit(o)
        assert.equal(JSON.stringify(res), JSON.stringify(o));
    });
    it('should return it without some', function () {
        var o = {a:1,  b:2, c:3},
            res = objwun.omit(o, ['a', 'c']);
        assert.equal(JSON.stringify(res), JSON.stringify({b:2}));
    });
});
