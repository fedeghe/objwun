var assert = require('assert'),
    ow = require('../dist');

describe('merge', () => {
    describe('objects', function () {
        it('should return an empty object', () => {
            assert.strictEqual(JSON.stringify(ow.merge({}, {}, {})), '{}');
        });
        it('should return a merged object', () => {
            const merged = ow.merge({
                a: 1
            }, {
                b: 2
            }, {
                c: 3
            });
            assert.strictEqual(
                JSON.stringify(merged),
                '{"a":1,"b":2,"c":3}'
            );
        });
        it('should return a merged object', () => {
            const merged = ow.merge({
                a: {aa:1}
            }, {
                b: 2
            }, {
                c: 3
            });
            assert.strictEqual(
                JSON.stringify(merged),
                '{"a":{"aa":1},"b":2,"c":3}'
            );
        });
    });
    describe('arrays', function () {
        it('should return an empty array', () => {
            assert.strictEqual(JSON.stringify(ow.merge([], [], [])), '[]');
        });
        it('should return a merged array', () => {
            const merged = ow.merge([{
                a: {aa:1}
            }], [{
                b: 2
            }], [{
                c: 3
            }]);
            assert.strictEqual(
                JSON.stringify(merged),
                '[{"a":{"aa":1}},{"b":2},{"c":3}]'
            );
        });
    });
    it('should return null', () => {
        assert.strictEqual(
            ow.merge(1,4,3,[], {}),
            null
        );
    });
    it('should not merge __proto__', () => {
        const bad = '{"__proto__":{"you":"are screwed !"}}';
        let a = {};
        assert.strictEqual(a.oops, undefined)
        ow.merge({}, JSON.parse(bad));
        assert.strictEqual(a.oops, undefined)
    });
    it('should throw an error in case of mixed arguments', () => {
        try {
            ow.merge([], {})
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });
});
