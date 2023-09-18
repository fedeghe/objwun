const ow = require('../../dist');

describe('remove', () => {
    test('should behave as expected on object', () => {
        var o = {
                a: 1, b: 2,
                c: 3, d: 4
            },
            even = ow.remove(o, (el, k) => el % 2 === 0);
        expect(JSON.stringify(even)).toEqual( JSON.stringify({b:2, d: 4}));
        expect(JSON.stringify(o)).toEqual( JSON.stringify({a:1, c: 3}));
    });
    
    test('should behave as expected on array', () => {
        var a = [1, 2, 3, 4],
            even = ow.remove(a, (el, k) => el % 2 === 0);
        expect(JSON.stringify(even)).toEqual( JSON.stringify([2, 4]));
        expect(JSON.stringify(a)).toEqual( JSON.stringify([1, 3]));
    });

    test('should behave as expected if a function is not passed as second argument', () => {
        var a = [1, 2, 3, 4], 
            even = ow.remove(a);
        expect(JSON.stringify(even)).toEqual( JSON.stringify([]));
        expect(JSON.stringify(a)).toEqual( JSON.stringify([1, 2, 3, 4]));
    });
    
    test('should throw an error for the non object or array argument', () => {
        try {
            ow.remove(3, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, object or array expected");
        }
    });
    test('should throw an error for the non function argument', () => {
        try {
            ow.remove({}, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, function expected");
        }
    });  
});
