const ow = require('../../dist');

describe('forEach', () => {
    test('should return an simple passed array', () => 
        expect(
            JSON.stringify(ow.forEach([1, 2]))
        ).toEqual(
            JSON.stringify([1, 2])
        )
    );

    test('should return an simple passed object literal content', () => 
        expect(
            JSON.stringify(ow.forEach({a: 1, b: 2}))
        ).toEqual(
            JSON.stringify({a: 1, b: 2}))
        );

    test('should use the passed function on array', () => {
        const mult = a => a * a
        expect(
            JSON.stringify(ow.forEach([2, 4, 6], mult))
        ).toEqual(
            JSON.stringify([4,16,36])
        );
    });

    test('should behave correctly on a instance', () => {
        function Mult() {
            this.m = 'internal'
        }
        var mul = new Mult()
        Mult.prototype.parasite = ''
        expect(
            JSON.stringify(ow.forEach(mul, a => a))
        ).toEqual(
            JSON.stringify({m:'internal'})
        );
    });

    test('should use the passed function on literal object', () => {
        const mult = a => a * a
        expect(
            JSON.stringify(ow.forEach({a:2,b:4}, mult))
        ).toEqual(
            JSON.stringify({a:4,b:16})
        );
    });

    test('should throw an error for the bad argument', () => {
        try {
            ow.forEach(false)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, object or array expected");
        }
    });

    test('∂ should be a pure function', () => {
        const mult = a => a * a,
            inp = {a: 2, b: 4},
            res = ow.forEach(inp, mult);
        expect(
            JSON.stringify(res)
        ).toEqual(
            JSON.stringify({a: 4, b: 16})
        );
        expect(
            JSON.stringify(inp)
        ).toEqual(
            JSON.stringify({a: 2, b: 4})
        );
    });
});
