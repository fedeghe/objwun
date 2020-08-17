var assert = require('assert'),
    ow = require('../dist');

describe('id', function () {
    
    it('should return a unique id', function () {
        assert.equal(!!`${ow.id}`.match(/id_\d+/), true);
    });

    it('should not create collisions', function () {
        const double = `${ow.id}${ow.id}`,
            matches = double.match(/id_(\d+)/g),
            noCollisions = matches[0] !== matches[1];
        assert.equal(noCollisions, true);
    });
});
