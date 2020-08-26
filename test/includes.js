var assert = require('assert'),
    ow = require('../dist');

describe('includes', () => {
    it('should return false', () => assert.equal(ow.includes([], null), false));

    it('should return true on array integer', () => assert.equal(ow.includes([1,2,3, null], null), true));
    it('should return true again on array integer', () => assert.equal(ow.includes([1,2,3, null], 2), true));

    it('should return false on array integer', () => assert.equal(ow.includes([1,2,3, null], 5), false));

    it('should throw an error for the bad argument', () => {
        try {
            ow.includes({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });    
    it('should throw an error for the missing argument', () => {
        try {
            ow.includes([])
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Missing expected argument");
        }
    });   
    it('∂ should be a pure function', () => {
        const inp = [1,2,3],
            res = ow.includes(inp, 2);
        assert.equal(res, true);
        assert.equal(JSON.stringify(inp), JSON.stringify([1,2,3]));
    });    
});
