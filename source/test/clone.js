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
        o.a = 1
        assert.strictEqual(clone.a.b.c.d, 1);
        assert.strictEqual(o.a, 1);
    });
});
