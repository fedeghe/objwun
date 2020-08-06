var assert = require('assert'),
    objwun = require('../dist');

describe('assign', function () {
    it('should return an empty object', function () {
        assert.equal(JSON.stringify(objwun.assign()), '{}');
    });
    it('should return the passed arguments', function () {
        assert.equal(
            JSON.stringify(objwun.assign({a: 1}, {b: 2})),
            JSON.stringify({a: 1, b: 2})
        );
    });
});
