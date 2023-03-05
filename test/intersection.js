var assert = require('assert'),
    ow = require('../dist');

describe('intersection', () => {
    it('should work as expected', () =>
        assert.strictEqual(JSON.stringify(ow.intersection(
            [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5],
        )), JSON.stringify([1, 2, 3, 4, 5]))
    );

    it('should work as expected deeper', () => {
        assert.strictEqual(JSON.stringify(ow.intersection(
            [0, 1, 2, 3, 4, 5, 6], [1, 2, 3], [1, 2, 3, 4, 5],
        )), JSON.stringify([1, 2, 3]));

        assert.strictEqual(JSON.stringify(ow.intersection(
            [0, 2, 4, 5, 1, 4, 5, 'a', 'A', 33, 234, 3, 'c'],
            [0, 'a', 'A', 33, 'c'],
            [0, 'a', 'A', 234, 45, 'c']
        )), JSON.stringify([0, 'a', 'A', 'c']))
    });
    
    it('should work as expected also with strings', () =>
        assert.strictEqual(JSON.stringify(ow.intersection(
            [0, 'a', 2, 'b', 4, 'c', 6], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'e'],
        )), JSON.stringify(['a', 'b', 'c']))
    );
});