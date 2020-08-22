var assert = require('assert'),
    ow = require('../dist');

describe('assign', function () {
    it('should return an empty object', function () {
        assert.equal(JSON.stringify(ow.assign()), '{}');
    });
    it('should return the passed arguments', function () {
        assert.equal(
            JSON.stringify(ow.assign({a: 1}, {b: 2})),
            JSON.stringify({a: 1, b: 2})
        );
    });
    it('should ignore empty objs', function () {
        assert.equal(
            JSON.stringify(ow.assign({a: 1}, {b: 2}, {}, {})),
            JSON.stringify({a: 1, b: 2})
        );
    });
    it('should override on the way', function () {
        assert.equal(
            JSON.stringify(ow.assign({a: 1}, {b: 2}, {}, {b:5}, {a:6})),
            JSON.stringify({a: 6, b: 5})
        );
    });
    it('should override on the way deeper', function () {
        assert.equal(
            JSON.stringify(ow.assign({a: 1}, {b: 2}, {}, {b:5}, {a:6}, {a:7}, {b:3, s:5})),
            JSON.stringify({a: 7, b: 3, s:5})
        );
    });
    it('should override in one', function () {
        assert.equal(
            JSON.stringify(ow.assign(
                {a: 1},
                {b: 2},
                {},
                {b:5},
                {a:6},
                {a:7},
                {b:3, s:5, a:0}
            )),
            JSON.stringify({a: 0, b: 3, s:5})
        );
    });
});
