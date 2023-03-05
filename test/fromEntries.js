var assert = require('assert'),
    ow = require('../dist');

describe('fromEntries', () => {
    it(
        'should return an simple passed array',
        () => assert.strictEqual(
            JSON.stringify(ow.fromEntries([['a', 1], ['b', 2]])),
            JSON.stringify({a:1, b: 2})
        )
    );

    it('should throw an error for the bad argument', () => {
        try {
            ow.fromEntries([['a', 1], ['b', 2, 'too many']])
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, wrong size");
        }
    });
    
    it('∂ should be a pure function', () => {
        const a = ["a", 1],
            b = ["b", 2],
            res = ow.fromEntries([a, b]);
        assert.strictEqual(
            JSON.stringify(res),
            JSON.stringify({a: 1, b: 2})
        );
        assert.strictEqual(
            JSON.stringify(a),
            JSON.stringify(['a', 1])
        );
        assert.strictEqual(
            JSON.stringify(b),
            JSON.stringify(['b', 2])
        );
    });
});
