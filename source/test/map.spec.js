const ow = require('../../dist');

describe('map', () => {

    test('should still return an empty array', () =>
        expect(JSON.stringify(ow.map([]))).toEqual( '[]')
    );

    test('should still return the input array', () => 
        expect(JSON.stringify(ow.map([1,2,3]))).toEqual( '[1,2,3]')
    );

    test('should return the content array',
        () => expect(
            JSON.stringify(ow.map({
                a:1, b:2, d:3
            }, (o, i) => o))
        ).toEqual(
            JSON.stringify({a:1,b:2,d:3})
        )
    );

    test('should return the content array from array',
        () => expect(
            JSON.stringify(ow.map([1,2,4], (o, i) => o))
        ).toEqual(
            '[1,2,4]'
        )
    );

    test('should throw an error for the bad argument', () => {
        try {
            ow.map(false, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, object or array expected");
        }
    });
    
    test('∂ should be a pure function', () => {
        const inp = {
            a:1, b:2, d:3
        },
        res = ow.map(inp, (o, i) => o);
        expect(JSON.stringify(res)).toEqual( JSON.stringify({a:1,b:2,d:3}));
        expect(JSON.stringify(res)).toEqual( JSON.stringify({
            a:1, b:2, d:3
        }));
    });   
});
