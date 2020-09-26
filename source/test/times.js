var assert = require('assert'),
    ow = require('../dist');

describe('times', () => {

    
    it('should return a non empty array', () => {
        const rand = () => Math.random()
        assert.strictEqual(ow.times(3, rand).length, 3);
    });

    it('should return the right array', () => {
        var res = ow.times(3, i => i*i),
            stringed = JSON.stringify(res);
        assert.strictEqual(stringed, JSON.stringify([0,1,4]));
    });

    it('should use the context ', () => {
        var o = {
                mult: a => a*2,
                n: 4
            },
            res = ow.times(3, function(i) {
                return this.n * this.mult(i)
            }, o),
            stringed = JSON.stringify(res);
        assert.strictEqual(stringed, JSON.stringify([0, 8, 16]));
    });

    it('should throw an error for the non number argument', () => {
        try {
            ow.times([])
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, integer expected");
        }
    });

    it('should throw an error for the non function argument', () => {
        try {
            ow.times(3, 4)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });

    it('∂ should be a pure function', () => {
        var o = {
            mult: a => a*2,
            n: 4
        };
        ow.times(3, function(i) {
            return this.n * this.mult(i)
        }, o),
        assert.strictEqual(JSON.stringify(o), JSON.stringify({
            mult: a => a*2,
            n: 4
        }));
    });  
});
