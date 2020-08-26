var assert = require('assert'),
    ow = require('../dist');

describe('map', () => {

    it('should still return an empty array', () => assert.equal(JSON.stringify(ow.map([])), '[]'));
    it('should still return the input array', () => assert.equal(JSON.stringify(ow.map([1,2,3])), '[1,2,3]'));

    it('should return the content array',
        () => assert.equal(
            JSON.stringify(ow.map({
                a:1, b:2, d:3
            }, (o, i) => o)),
            JSON.stringify({a:1,b:2,d:3})
        )
    );

    it('should return the content array from array',
        () => assert.equal(
            JSON.stringify(ow.map([1,2,4], (o, i) => o)),
            '[1,2,4]'
        )
    );
    it('should throw an error for the bad argument', () => {
        try {
            ow.map(false, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object or array expected");
        }
    });
    it('∂ should be a pure function', () => {
        const inp = {
            a:1, b:2, d:3
        },
        res = ow.map(inp, (o, i) => o);
        assert.equal(JSON.stringify(res), JSON.stringify({a:1,b:2,d:3}));
        assert.equal(JSON.stringify(res), JSON.stringify({
            a:1, b:2, d:3
        }));
    });   
});
