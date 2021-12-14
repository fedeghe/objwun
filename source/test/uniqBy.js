var assert = require('assert'),
    ow = require('../dist');

describe('uniqBy', () => {
    it('should behave like uniq when a second parameter is not passed', () => assert.strictEqual(JSON.stringify(ow.uniqBy([1,1,2,3,2,3,1])), '[1,2,3]'));
    it('should return the expected when a string is passed',
        () => assert.strictEqual(
            JSON.stringify(ow.uniqBy([
                {a: 1, b: 1},
                {a: 1},
                {b: 3},
                {c: 4},
                {b: 77}
            ], 'a')),
            JSON.stringify([{a:1,b:1},{b:3}])
        )
    );
    it('should return the expected when a function is passed',
        () => assert.strictEqual(
            JSON.stringify(ow.uniqBy([
                2.34,
                3.55,
                2.33
            ], Math.floor)),
            JSON.stringify([2.34, 3.55])
        )
    );
});
