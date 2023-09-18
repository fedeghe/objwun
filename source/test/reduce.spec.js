const ow = require('../../dist');

describe('reduce', () => {
    var o = {
            a: 1, b: 2,
            c: 3, d: 4
        },
        a = [1, 2, 3, 4];
    
    test('should behave like a basic summer', () => {
        var sum = ow.reduce(o,
            (acc, el) => {
                return acc + el
            }, 0
        );
        expect(sum).toEqual( 1 + 2 + 3 + 4);
    });

    test('should behave like a filter on object', () => {
        var even = ow.reduce(o,
                (acc, el, k) => {
                    if (el % 2 === 0) acc[k] = el;
                    return acc
                }, {}
            ),
            odd = ow.reduce(o,
                (acc, el, k) => {
                    if (el % 2 === 1) acc[k] = el;
                    return acc
                }
            );
        expect(JSON.stringify(even)).toEqual( JSON.stringify({b:2, d: 4}));
        expect(JSON.stringify(odd)).toEqual( JSON.stringify({a:1, c: 3}));
    });

    test('should behave like a filter on array', () => {
        var even = ow.reduce(a,
                (acc, el, k) => {
                    if (el % 2 === 0) acc.push(el);
                    return acc
                }, []
            ),
            odd = ow.reduce(a,
                (acc, el, k) => {
                    if (el % 2 === 1) acc.push(el);
                    return acc
                }
            );
        expect(JSON.stringify(even)).toEqual( JSON.stringify([2, 4]));
        expect(JSON.stringify(odd)).toEqual( JSON.stringify([1, 3]));
    });
    
    test('should allow to build a composing function', () => {
        var mult3 = a => a * 3,
            pow2 = a => Math.pow(a, 2),
            divide2 = a => a / 2,
            composed = ow.reduce(
                [mult3, pow2, divide2],
                (acc, el) => (...args) => el(acc(...args)),
                a => a
            );
        expect(composed(2)).toEqual( 18);
    });

    test('should allow to escape', () => {
        var mult3 = a => a * 3,
            pow2 = a => Math.pow(a, 2),
            divide2 = a => a / 2,
            composed = ow.reduce(
                [mult3, pow2, divide2],
                (acc, el) => (...args) => el(acc(...args)),
                a => a,
                (_, e) => e.name === 'pow2'
            );
        expect(composed(2)).toEqual( 6);
    });


    test('should throw an error for the non object or array argument', () => {
        try {
            ow.reduce(3, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, object or array expected");
        }
    });
    test('should throw an error for the non function argument', () => {
        try {
            ow.reduce({}, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, function expected");
        }
    });

    test('should throw an error if the escape is not a function', () => {
        try {
            ow.reduce({}, () => {}, 0, 'not a function')
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, function expected");
        }
    });

    test('∂ should be a pure function', () => {
        var o = {a:1, b:2, c:3},
            res = ow.reduce(o, ((acc, el) => {
                acc*=el;
                return acc
            }), 1 );
        expect(res).toEqual( 6);
        expect(JSON.stringify(o)).toEqual( JSON.stringify({a:1, b:2, c:3}));
    });   
});
