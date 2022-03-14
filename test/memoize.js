var assert = require('assert'),
    ow = require('../dist');

describe('memoize', () => {

    it('should return the expected',
        () => {
            var check = 0;
            var m = ow.memoize(function (t, o) {
                check++;
                o = o ||1 ;
                return t*t*o;
            })
            assert.strictEqual(
                m(6,3),
                m(6,3)
            )
            assert.strictEqual(
                m(6,3,2),
                m(6,3,2)
            )
            assert.strictEqual(check, 2)
        }
    );
    it('should return the expected - using context',
        () => {
            var ctx = {
                u : 20
            }
            var check = 0;
            var m = ow.memoize(function (t) {
                check++;
                return t*t*this.u;
            }, ctx)
            assert.strictEqual(
                m(6),
                720
            )
            assert.strictEqual(
                m(3),
                m(3)
            )
            assert.strictEqual(check, 2)
        }
    );
    it('should throw an error in case of unexpected arguments', () => {
        try {
            ow.memoize([])
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });
});
