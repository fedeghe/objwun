var assert = require('assert'),
    ow = require('../dist');

describe('includes', function () {
    it('should return false', function () {
        assert.equal(ow.includes([], null), false);
    });

    it('should return true on array integer', function () {
        assert.equal(ow.includes([1,2,3, null], null), true);
    });

    it('should return false on array integer', function () {
        assert.equal(ow.includes([1,2,3, null], 5), false);
    });

    it('should throw an error for the bad argument', function () {
        try {
            ow.includes({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });    
    it('should throw an error for the missing argument', function () {
        try {
            ow.includes([])
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Missing expected argument");
        }
    });    
});
