var assert = require('assert'),
    ow = require('../dist');

describe('includes', () => {
    describe('array', () => {
        it('should return false', () => assert.strictEqual(ow.includes([], null), false));

        it('should return true on array integer', () => assert.strictEqual(ow.includes([1,2,3, null], null), true));
        it('should return true again on array integer', () => assert.strictEqual(ow.includes([1,2,3, null], 2), true));

        it('should return false on array integer', () => assert.strictEqual(ow.includes([1,2,3, null], 5), false));
  
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
            assert.strictEqual(res, true);
            assert.strictEqual(JSON.stringify(inp), JSON.stringify([1,2,3]));
        });    
    });

    describe('object', () => {
        it('should return false', () => assert.strictEqual(ow.includes({}, null), false));

        it('should return true', () => assert.strictEqual(ow.includes({
            a:1, b: 2, c: 3, d: null
        }, null), true));

        it('should return true again', () => assert.strictEqual(ow.includes({
            a: 1, b: 2, c: 3, d: null
        }, 2), true));

        it('should return false on array integer', () => assert.strictEqual(ow.includes({
            a: 1, b: 2, c: 3, d: null
        }, 5), false));

 
        it('should throw an error for the missing argument', () => {
            try {
                ow.includes({})
            } catch (e) {
                assert.strictEqual(e instanceof Error, true);
                assert.strictEqual(e.message, "Missing expected argument");
            }
        });   

        it('∂ should be a pure function', () => {
            const inp = {a: 1, b: 2, d: 3},
                res = ow.includes(inp, 2);
            assert.strictEqual(res, true);
            assert.strictEqual(JSON.stringify(inp), JSON.stringify({a: 1, b: 2, d: 3}));
        });    
    });
});
