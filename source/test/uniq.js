var assert = require('assert'),
    ow = require('../dist');

describe('uniq', () => {
    it('should return the expected', () => assert.strictEqual(JSON.stringify(ow.uniq([1,1,2,3,2,3,1])), '[1,2,3]'));
});
