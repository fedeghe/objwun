const ow = require('../../dist');

describe('fromEntries', () => {
    test(
        'should return an simple passed array',
        () => expect(
            JSON.stringify(ow.fromEntries([['a', 1], ['b', 2]]))
        ).toEqual(
            JSON.stringify({a:1, b: 2})
        )
    );

    test('should throw an error for the bad argument', () => {
        try {
            ow.fromEntries([['a', 1], ['b', 2, 'too many']])
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, wrong size");
        }
    });
    
    test('∂ should be a pure function', () => {
        const a = ["a", 1],
            b = ["b", 2],
            res = ow.fromEntries([a, b]);
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({a: 1, b: 2})
        );
        expect(
            JSON.stringify(a)
        ).toEqual(
            JSON.stringify(['a', 1])
        );
        expect(
            JSON.stringify(b)
        ).toEqual(
            JSON.stringify(['b', 2])
        );
    });
});
