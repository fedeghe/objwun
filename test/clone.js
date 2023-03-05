var assert = require('assert'),
    ow = require('../dist');

describe('clone', () => {

    it('should return the same empty', () => {
        assert.strictEqual(JSON.stringify(ow.clone({})), '{}');
        assert.strictEqual(JSON.stringify(ow.clone([])), '[]');
    });

    it('should return the same obj, different ref', () => {
        const o = {
                a: {
                    b: {
                        c: {
                            d: 1
                        },
                        d: 2
                    }
                }
            },
            clone = ow.clone(o);
        assert.strictEqual(JSON.stringify(clone), JSON.stringify(o));
        o.a = 1;
        assert.strictEqual(clone.a.b.c.d, 1);
        assert.strictEqual(o.a, 1);
    });

    it('should return functions', () => {
        const o = {
                a:  e => e ** 2
            },
            clone = ow.clone(o);
        assert.strictEqual(o.a(3), clone.a(3));
        // check ref
        o.a = 1;
        assert.strictEqual(typeof clone.a, 'function');
        assert.strictEqual(o.a, 1);
    });

    it('should throw an exception', () => {
        const o = 1;
        try {
            ow.clone(o);
        } catch(e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
        }
    });
});
