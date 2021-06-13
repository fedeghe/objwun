var assert = require('assert'),
    ow = require('../dist');

describe('intersection', () => {
    it('should work as expected', () =>
        assert.strictEqual(JSON.stringify(ow.intersection(
            [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5],
        )), JSON.stringify([1, 2, 3, 4, 5]))
    );
    it('should work as expected deeper', () =>
        assert.strictEqual(JSON.stringify(ow.intersection(
            [0, 1, 2, 3, 4, 5, 6], [1, 2, 3], [1, 2, 3, 4, 5],
        )), JSON.stringify([1, 2, 3]))
    );
});