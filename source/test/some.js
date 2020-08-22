var assert = require('assert'),
    ow = require('../dist');

describe('some', function () {
    it('should return true, simple array', function () {
        assert.equal(ow.some([1,2,3,5], function (e) {
            return e % 2 === 0
        }), true);
    });
    it('should return true, array of object literals', function () {
        assert.equal(ow.some([{
            name: 'Federico'
        }, {
            name:'John'
        }, {
            name: 'Fluffy'
        }], function (e) {
            return e.name.match(/^F*/)
        }), true);
    });

    it('should throw an error for the non array argument', function () {
        try {
            ow.some({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });

    it('should throw an error for the non function argument', function () {
        try {
            ow.some([], 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });
});
