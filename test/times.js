var assert = require('assert'),
    ow = require('../dist');

describe('times', function () {

    
    it('should return a non empty array', function () {
        function rand() {
            return Math.random()
        }
        assert.equal(ow.times(3, rand).length, 3);
    });

    it('should return the right array', function () {
        var res = ow.times(3, function(i) {
                return i*i
            }),
            stringed = JSON.stringify(res);
        assert.equal(stringed, JSON.stringify([0,1,4]));
    });

    it('should use the context ', function () {
        var o = {
                mult: a => a*2,
                n: 4
            },
            res = ow.times(3, function(i) {
                return this.n * this.mult(i)
            }, o),
            stringed = JSON.stringify(res);
        assert.equal(stringed, JSON.stringify([0, 8, 16]));
    });

    it('should throw an error for the non number argument', function () {
        try {
            ow.times([])
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, integer expected");
        }
    });

    it('should throw an error for the non function argument', function () {
        try {
            ow.times(3, 4)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });

    it('∂ should be a pure function', function () {
        var o = {
            mult: a => a*2,
            n: 4
        };
        ow.times(3, function(i) {
            return this.n * this.mult(i)
        }, o),
        assert.equal(JSON.stringify(o), JSON.stringify({
            mult: a => a*2,
            n: 4
        }));
    });  
});
