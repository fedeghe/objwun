const ow = require('../../dist');

describe('clone', () => {

    test('should return the same empty', () => {
        expect(JSON.stringify(ow.clone({}))).toEqual('{}');
        expect(JSON.stringify(ow.clone([]))).toEqual('[]');
    });

    test('should return the same obj, different ref', () => {
        const o = {
                a: {
                    b: {
                        c: {
                            d: 1
                        },
                        d: 2
                    }
                }
            },
            clone = ow.clone(o);
        expect(JSON.stringify(clone)).toEqual(JSON.stringify(o));
        o.a = 1;
        expect(clone.a.b.c.d).toEqual(1);
        expect(o.a).toEqual(1);
    });

    test('should return functions', () => {
        const o = {
                a:  e => e ** 2
            },
            clone = ow.clone(o);
        expect(o.a(3)).toEqual(clone.a(3));
        // check ref
        o.a = 1;
        expect(typeof clone.a).toEqual('function');
        expect(o.a).toEqual(1);
    });

    test('should throw an exception', () => {
        const o = 1;
        try {
            ow.clone(o);
        } catch(e) {
            expect(e instanceof Error).toEqual(true);
            expect(e.message).toEqual(ow.core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
        }
    });
});
