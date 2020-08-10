var assert = require('assert'),
    objwun = require('../dist');

describe('map', function () {
    it('should return an empty array', function () {
        assert.equal(JSON.stringify(objwun.map()), '[]');
    });

    it('should still return an empty array', function () {
        assert.equal(JSON.stringify(objwun.map([])), '[]');
    });

    it('should return the content array', function () {
        assert.equal(JSON.stringify(objwun.map({
            a:1, b:2, d:3
        }, function (o, i) {
            return o
        })), '[1,2,3]');
    });

    it('should return the content array from array', function () {
        assert.equal(JSON.stringify(objwun.map([1,2,4], function (o, i) {
            return o
        })), '[1,2,4]');
    });
});
