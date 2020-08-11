var assert = require('assert'),
    objwun = require('../dist');

describe('get', function () {
    it('should return null', function () {
        var o = { a: 1, b: 2, c: 3 },
            res = objwun.get(o, 't')
        assert.equal(res, null);
    });
    it('should return a number', function () {
        var o = { a: 1, b: 2, c: 3 },
            res = objwun.get(o, 'b')
        assert.equal(res, 2);
    });
    it('should return a deeper number', function () {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = objwun.get(o, 'c.d.a')
        assert.equal(res, 111);
    });
    it('should return an object', function () {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = objwun.get(o, 'c.d')
        assert.equal(JSON.stringify(res), JSON.stringify({a:111,b:222}));
    });
    it('should return default value', function () {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = objwun.get(o, 'c.e', {s:1})
        assert.equal(JSON.stringify(res), JSON.stringify({s:1}));
    });
});
