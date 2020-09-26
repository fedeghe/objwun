var assert = require('assert'),
    ow = require('../dist');

describe('omit', () => {
    it('should return an empty obj', () => {
        var o = {a:1, b:2, c:3},
            res = ow.omit(o, ['a', 'b', 'c']);
        assert.strictEqual(JSON.stringify(res), JSON.stringify({}));
    });
    it('should return it as it is', () => {
        var o = {a:1, b:2, c:3},
            res = ow.omit(o, [])
        assert.strictEqual(JSON.stringify(res), JSON.stringify(o));
    });
    it('should return it without some', () => {
        var o = {a:1, b:2, c:3},
            res = ow.omit(o, ['a', 'c']);
        assert.strictEqual(JSON.stringify(res), JSON.stringify({b:2}));
    });
    it('should throw an error for the non object argument', () => {
        try {
            ow.omit([])
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object expected");
        }
    });
    it('should throw an error for the non array argument', () => {
        try {
            ow.omit({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });
    it('∂ should be a pure function', () => {
        var o = {a:1, b:2, c:3};
        ow.omit(o, ['a', 'c']);
        assert.strictEqual(JSON.stringify(o), JSON.stringify({a:1, b:2, c:3}));
    });   
});
