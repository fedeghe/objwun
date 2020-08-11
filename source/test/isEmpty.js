var assert = require('assert'),
    objwun = require('../dist');

describe('isEmpty', function () {
    it('should return true on empty string', function () {
        assert.equal(objwun.isEmpty(''), true);
    });
    it('should return true on empty array', function () {
        assert.equal(objwun.isEmpty([]), true);
    });
    it('should return false on non empty array', function () {
        assert.equal(objwun.isEmpty([1]), false);
    });
    it('should return true on empty obj', function () {
        assert.equal(objwun.isEmpty({}), true);
    });
    it('should return false on non empty obj', function () {
        assert.equal(objwun.isEmpty({a:1}), false);
    });
    it('should return true on undefined', function () {
        assert.equal(objwun.isEmpty(), true);
    });
    it('should return true on null', function () {
        assert.equal(objwun.isEmpty(null), true);
    });
    it('should return false on function', function () {
        assert.equal(objwun.isEmpty(function() {}), false);
    });
});
