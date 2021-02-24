var assert = require('assert'),
    ow = require('../dist');

describe('isEmpty', () => {
    it('should return true on empty string', () => assert.strictEqual(ow.isEmpty(''), true));
    it('should return true on empty array', () => assert.strictEqual(ow.isEmpty([]), true));
    it('should return false on non empty array', () => assert.strictEqual(ow.isEmpty([1]), false));
    it('should return true on empty obj', () => assert.strictEqual(ow.isEmpty({}), true));
    it('should return false on non empty obj', () => assert.strictEqual(ow.isEmpty({a:1}), false));
    it('should return true on null', () => assert.strictEqual(ow.isEmpty(null), true));
    it('should return false on function', () => assert.strictEqual(ow.isEmpty(() => {}), false));
    it('should avoid upper prototype properties', () => {
        function Person(n) {}
        var me = new Person('Federico')

        Person.prototype.type = 'human';
        assert.strictEqual(ow.isEmpty(me), true);
    });
    it('should avoid upper prototype (counterproof) properties', () => {
        function Person(n) {this.name = n}
        var me = new Person('Federico')

        assert.strictEqual(ow.isEmpty(me), false);
    });
    it('should throw an error for the missing argument', () => {
        try {
            ow.isEmpty()
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Missing expected argument");
        }
    });
    it('∂ should be a pure function', () => {
        const inp = [1,2,3],
            res = ow.isEmpty(inp);
        assert.strictEqual(res, false);
        assert.strictEqual(JSON.stringify(inp), JSON.stringify([1,2,3]));
    });    

});
