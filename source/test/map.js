var assert = require('assert'),
    ow = require('../dist');

describe('map', function () {
    it('should return an empty array', function () {
        assert.equal(JSON.stringify(ow.map()), '[]');
    });

    it('should still return an empty array', function () {
        assert.equal(JSON.stringify(ow.map([])), '[]');
    });
    it('should still return the input array', function () {
        assert.equal(JSON.stringify(ow.map([1,2,3])), '[1,2,3]');
    });

    it('should return the content array', function () {
        assert.equal(JSON.stringify(ow.map({
            a:1, b:2, d:3
        }, function (o, i) {
            return o
        })), '[1,2,3]');
    });

    it('should return the content array from array', function () {
        assert.equal(JSON.stringify(ow.map([1,2,4], function (o, i) {
            return o
        })), '[1,2,4]');
    });
});
