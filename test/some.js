var assert = require('assert'),
    ow = require('../dist');

describe('some', () => {
    it('should return true, simple array', () => 
        assert.strictEqual(
            ow.some([1,2,3,5], e => e % 2 === 0),
            true
        )
    );
    it('should return true, array of object literals', () => 
        assert.strictEqual(ow.some([{
            name: 'Federico'
        }, {
            name:'John'
        }, {
            name: 'Fluffy'
        }], function (e) {
            return e.name.match(/^F*/)
        }), true)
    );
    it('should return false', () => 
        assert.strictEqual(ow.some([{
            name: 'Federico'
        }, {
            name:'John'
        }, {
            name: 'Fluffy'
        }], function (e) {
            return e.name.match(/^Fff*/)
        }), false)
    );

    it('should throw an error for the non array argument', () => {
        try {
            ow.some({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });

    it('should throw an error for the non function argument', () => {
        try {
            ow.some([], 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });
    it('∂ should be a pure function', () => {
        var o = [1, 2, 3],
            res = ow.some(o, el => el % 2 === 0);
        assert.strictEqual(res, true);
        assert.strictEqual(JSON.stringify(o), JSON.stringify([1,2,3]));
    });  
});
