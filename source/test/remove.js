var assert = require('assert'),
    ow = require('../dist');

describe('remove', () => {
    it('should behave as expected on object', () => {
        var o = {
                a: 1, b: 2,
                c: 3, d: 4
            },
            even = ow.remove(o, (el, k) => el % 2 === 0);
        assert.strictEqual(JSON.stringify(even), JSON.stringify({b:2, d: 4}));
        assert.strictEqual(JSON.stringify(o), JSON.stringify({a:1, c: 3}));
    });
    
    it('should behave as expected on array', () => {
        var a = [1, 2, 3, 4],
            even = ow.remove(a, (el, k) => el % 2 === 0);
        assert.strictEqual(JSON.stringify(even), JSON.stringify([2, 4]));
        assert.strictEqual(JSON.stringify(a), JSON.stringify([1, 3]));
    });

    it('should behave as expected if a function is not passed as second argument', () => {
        var a = [1, 2, 3, 4], 
            even = ow.remove(a);
        assert.strictEqual(JSON.stringify(even), JSON.stringify([]));
        assert.strictEqual(JSON.stringify(a), JSON.stringify([1, 2, 3, 4]));
    });
    
    it('should throw an error for the non object or array argument', () => {
        try {
            ow.remove(3, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object or array expected");
        }
    });
    it('should throw an error for the non function argument', () => {
        try {
            ow.remove({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });  
});
