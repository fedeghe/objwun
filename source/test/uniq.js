var assert = require('assert'),
    ow = require('../dist');

describe('uniq', function () {
    it('should return a unique id', function () {
        assert.equal(!!`${ow.uniq}`.match(/uniq_\d+/), true);
    });
    it('should not create collisions', function () {
        const double = `${ow.uniq}${ow.uniq}`,
            matches = double.match(/uniq_(\d+)/g),
            noCollisions = matches[0] !== matches[1];
        assert.equal(noCollisions, true);
    }); 
});
