const ow = require('../../dist');

describe('omit', () => {
    test('should return an empty obj', () => {
        var o = {a:1, b:2, c:3},
            res = ow.omit(o, ['a', 'b', 'c']);
        expect(JSON.stringify(res)).toEqual( JSON.stringify({}));
    });
    test('should return it as it is', () => {
        var o = {a:1, b:2, c:3},
            res = ow.omit(o, [])
        expect(JSON.stringify(res)).toEqual( JSON.stringify(o));
    });
    test('should return it without some', () => {
        var o = {a:1, b:2, c:3},
            res = ow.omit(o, ['a', 'c']);
        expect(JSON.stringify(res)).toEqual( JSON.stringify({b:2}));
    });
    test('should throw an error for the non object argument', () => {
        try {
            ow.omit([])
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, object expected");
        }
    });
    test('should throw an error for the non array argument', () => {
        try {
            ow.omit({}, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, array expected");
        }
    });
    test('∂ should be a pure function', () => {
        var o = {a:1, b:2, c:3};
        ow.omit(o, ['a', 'c']);
        expect(JSON.stringify(o)).toEqual( JSON.stringify({a:1, b:2, c:3}));
    });   
});
