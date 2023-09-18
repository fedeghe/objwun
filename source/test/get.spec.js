const ow = require('../../dist');

describe('get', () => {
    test('should return null', () => {
        var o = {},
            res = ow.get(o, 't')
        expect(res).toEqual( null);
    });

    test('should again return null', () => {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.get(o, 't')
        expect(res).toEqual( null);
    });

    test('should return a number', () => {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.get(o, 'b')
        expect(res).toEqual( 2);
    });

    test('should return a deeper number', () => {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = ow.get(o, 'c.d.a')
        expect(res).toEqual( 111);
    });

    test('should return an object', () => {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = ow.get(o, 'c.d')
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({a:111,b:222})
        );
    });

    test('should return default value', () => {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = ow.get(o, 'c.e', {s:1})
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({s:1})
        );
    });

    test('should also return default value', () => {
        var o = {
            a: 1, b: 2, c: {
                a:11, b:22, c:33, d: {
                    a:111,b:222
                }
            }},
            res = ow.get(o, 'a.e', {s:1})
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({s:1})
        );
    });

    test('should return elements from array of objects', () => {
        var o = [{
                a: 1, b: 2, c: 3,
                d: [1,2,3,4,{
                    a:6,b:7,c:8,d:{
                        aa:1,bb:[11,22,33,44,55]
                    }
                }]
            }],
            res = ow.get(o, '0.d.2')
        expect(res).toEqual( 3);
    });

    test('should return elements from object of arrays (mixed index notation)', () => {
        var o = {
                a: 1, b: 2, c: 3,
                d: [1,2,3,4,{
                    a:6,b:7,c:8,d:{
                        aa:1,bb:[11,22,33,44,55]
                    }
                }]
            },
            res = ow.get(o, 'd.4.d.bb[3]')
        expect(res).toEqual( 44);
    });
    
    test('should return elements from bigger array of objects', () => {
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
        expect(res).toEqual( 1234567);
    });

    test('should throw an error for the bad argument', () => {
        try {
            ow.get(false, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, object or array expected");
        }
    });
    
    test('should throw an error for the missing argument', () => {
        try {
            ow.get({})
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Missing expected argument");
        }
    });
    
    test('∂ should be a pure function', () => {
        const o = [{a: 1},    
                {s: 10}, 3,    
                null, {a: 1},    
                {a: 1234567}, {d: {e:[1,2,3,4]}}
            ],
            res = ow.get(o, '6.d');
        expect(JSON.stringify(res)).toEqual( JSON.stringify({e:[1,2,3,4]}));
        expect(JSON.stringify(o)).toEqual( JSON.stringify([{a: 1},    
            {s: 10}, 3,    
            null, {a: 1},    
            {a: 1234567}, {d: {e:[1,2,3,4]}}
        ]));
    });
});
