var assert = require('assert'),
    objwun = require('../dist');

describe('get', function () {
    it('should return null', function () {
        var o = {},
            res = objwun.get(o, 't')
        assert.equal(res, null);
    });
    it('should again return null', function () {
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
    it('should return elements from array of objects', function () {
        var o = [{
                a: 1, b: 2, c: 3,
                d: [1,2,3,4,{
                    a:6,b:7,c:8,d:{
                        aa:1,bb:[11,22,33,44,55]
                    }
                }]
            }],
            res = objwun.get(o, '0.d.2')
        assert.equal(JSON.stringify(res), 3);
    });
    it('should return elements from object of arrays (mixed index notation)', function () {
        var o = {
                a: 1, b: 2, c: 3,
                d: [1,2,3,4,{
                    a:6,b:7,c:8,d:{
                        aa:1,bb:[11,22,33,44,55]
                    }
                }]
            },
            res = objwun.get(o, 'd.4.d.bb[3]')
        assert.equal(JSON.stringify(res), 44);
    });
    it('should return elements from bigger array of objects', function () {
        var o = [
                {a: 1}, {a: 1},    
                {a: 1}, {a: 1},    
                {a: 1}, {a: 1},    
                {a: 1}, {a: 1},    
                {a: 1}, {a: 1},    
                {a: 1}, {a: 1},    
                {a: 1234567}, {a: 1},    
            ],
            res = objwun.get(o, '12.a')
        assert.equal(JSON.stringify(res), 1234567);
    });
});
