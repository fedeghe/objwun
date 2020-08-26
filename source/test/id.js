var assert = require('assert'),
    ow = require('../dist');

describe('id', () => {
    
    it('should return a unique id', () => assert.equal(!!`${ow.id}`.match(/id_\d+/), true));

    it('should not create collisions', () => {
        const double = `${ow.id}${ow.id}`,
            matches = double.match(/id_(\d+)/g),
            noCollisions = matches[0] !== matches[1];
        assert.equal(noCollisions, true);
    });
});
