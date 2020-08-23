var assert = require('assert'),
    ow = require('../dist');

describe('get', function () {
    it('should return null', function () {
        var o = {},
            res = ow.get(o, 't')
        assert.equal(res, null);
    });
    it('should again return null', function () {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.get(o, 't')
        assert.equal(res, null);
    });
    it('should return a number', function () {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.get(o, 'b')
        assert.equal(res, 2);
    });
    it('should return a deeper number', function () {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = ow.get(o, 'c.d.a')
        assert.equal(res, 111);
    });
    it('should return an object', function () {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = ow.get(o, 'c.d')
        assert.equal(JSON.stringify(res), JSON.stringify({a:111,b:222}));
    });
    it('should return default value', function () {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = ow.get(o, 'c.e', {s:1})
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
            res = ow.get(o, '0.d.2')
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
            res = ow.get(o, 'd.4.d.bb[3]')
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
            res = ow.get(o, '12.a')
        assert.equal(JSON.stringify(res), 1234567);
    });

    it('should throw an error for the bad argument', function () {
        try {
            ow.get(false, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object or array expected");
        }
    });
    
    it('should throw an error for the missing argument', function () {
        try {
            ow.get({})
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Missing expected argument");
        }
    });
    
    it('∂ should be a pure function', function () {
        const o = [{a: 1},    
                {s: 10}, 3,    
                null, {a: 1},    
                {a: 1234567}, {d: {e:[1,2,3,4]}}
            ],
            res = ow.get(o, '5.a');
        assert.equal(JSON.stringify(res), 1234567);
        assert.equal(JSON.stringify(o), JSON.stringify([{a: 1},    
            {s: 10}, 3,    
            null, {a: 1},    
            {a: 1234567}, {d: {e:[1,2,3,4]}}
        ]));
    });
});
