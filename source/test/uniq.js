var assert = require('assert'),
    ow = require('../dist');

describe('uniq', function () {

    it('should return the expected', function () {
        assert.equal(JSON.stringify(ow.uniq([1,1,2,3,2,3,1])), '[1,2,3]');
    });

});
