var assert = require('assert'),
    ow = require('../dist');

describe('omit', function () {
    it('should return an empty obj', function () {
        var o = {a:1, b:2, c:3},
            res = ow.omit(o, ['a', 'b', 'c']);
        assert.equal(JSON.stringify(res), JSON.stringify({}));
    });
    it('should return it as it is', function () {
        var o = {a:1, b:2, c:3},
            res = ow.omit(o, [])
        assert.equal(JSON.stringify(res), JSON.stringify(o));
    });
    it('should return it without some', function () {
        var o = {a:1, b:2, c:3},
            res = ow.omit(o, ['a', 'c']);
        assert.equal(JSON.stringify(res), JSON.stringify({b:2}));
    });
    it('should throw an error for the non object argument', function () {
        try {
            ow.omit([])
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object expected");
        }
    });
    it('should throw an error for the non array argument', function () {
        try {
            ow.omit({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });
});
