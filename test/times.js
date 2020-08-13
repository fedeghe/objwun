var assert = require('assert'),
    ow = require('../dist');

describe('times', function () {
    it('should return an empty array', function () {
        assert.equal(JSON.stringify(ow.times()), '[]');
    });
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
            stringed = JSON.stringify(res)
        assert.equal(stringed, JSON.stringify([0,1,4]));
    });
});
