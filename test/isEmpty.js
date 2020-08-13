var assert = require('assert'),
    ow = require('../dist');

describe('isEmpty', function () {
    it('should return true on empty string', function () {
        assert.equal(ow.isEmpty(''), true);
    });
    it('should return true on empty array', function () {
        assert.equal(ow.isEmpty([]), true);
    });
    it('should return false on non empty array', function () {
        assert.equal(ow.isEmpty([1]), false);
    });
    it('should return true on empty obj', function () {
        assert.equal(ow.isEmpty({}), true);
    });
    it('should return false on non empty obj', function () {
        assert.equal(ow.isEmpty({a:1}), false);
    });
    it('should return true on undefined', function () {
        assert.equal(ow.isEmpty(), true);
    });
    it('should return true on null', function () {
        assert.equal(ow.isEmpty(null), true);
    });
    it('should return false on function', function () {
        assert.equal(ow.isEmpty(function() {}), false);
    });
});
