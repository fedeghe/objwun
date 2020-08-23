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
    it('should return true on null', function () {
        assert.equal(ow.isEmpty(null), true);
    });
    it('should return false on function', function () {
        assert.equal(ow.isEmpty(function() {}), false);
    });
    it('should avoid upper prototype properties', function () {
        function Person(n) {}
        var me = new Person('Federico')

        Person.prototype.type = 'human';
        assert.equal(ow.isEmpty(me), true);
    });
    it('should avoid upper prototype (counterproof) properties', function () {
        function Person(n) {this.name = n}
        var me = new Person('Federico')

        assert.equal(ow.isEmpty(me), false);
    });
    it('should throw an error for the missing argument', function () {
        try {
            ow.isEmpty()
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Missing expected argument");
        }
    });
    it('∂ should be a pure function', function () {
        const inp = [1,2,3],
            res = ow.isEmpty(inp);
        assert.equal(res, false);
        assert.equal(JSON.stringify(inp), JSON.stringify([1,2,3]));
    });    

});
