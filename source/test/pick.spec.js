const ow = require('../../dist');

describe('pick', () => {
    test('should return an empty obj', () => {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.pick(o, [])
        expect(JSON.stringify(res)).toEqual( JSON.stringify({}));
    });
    test('should return it without some', () => {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.pick(o, ['a', 'c', 'd']);
        expect(JSON.stringify(res)).toEqual( JSON.stringify({ a: 1, c: 3 }));
    });
    test('should return the whole', () => {
        var o = { a: 1, b: 2, c: 3 },
            res = ow.pick(o, ['a', 'b', 'c', null]);
        expect(JSON.stringify(res)).toEqual( JSON.stringify({ a: 1, b: 2, c: 3 }));
    });
    test('∂ should be a pure function', () => {
        var o = {a:1, b:2, c:3};
        ow.pick(o, ['a', 'c']);
        expect(JSON.stringify(o)).toEqual( JSON.stringify({a:1, b:2, c:3}));
    });   
});
