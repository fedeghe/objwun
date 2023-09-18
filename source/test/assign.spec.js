const ow = require('../../dist');

describe('assign', () => {

    test('should return an empty object', () => {
        expect(
            JSON.stringify(ow.assign())
        ).toEqual('{}')
    });

    test('should return the passed arguments', () => {
        expect(
            JSON.stringify(ow.assign({a: 1}, {b: 2}))
        ).toEqual(
            JSON.stringify({a: 1, b: 2})
        )
    });
    test('should ignore empty objs', () => {
        expect(
            JSON.stringify(ow.assign({a: 1}, {b: 2}, {}, {}, {c: 3}, {}, {d: 4})),
        ).toEqual(
            JSON.stringify({a: 1, b: 2, c: 3, d: 4})
        )
    });
        
        
    test('should override on the way', () => {
        expect(
            JSON.stringify(ow.assign({a: 1}, {b: 2}, {}, {b:5}, {a:6}))
        ).toEqual(
            JSON.stringify({a: 6, b: 5})
        );
    });

    test('should override on the way deeper', () => {
        expect(
            JSON.stringify(ow.assign({a: 1}, {b: 2}, {}, {b:5}, {a:6}, {a:7}, {b:3, s:5}))
        ).toEqual(
            JSON.stringify({a: 7, b: 3, s:5})
        );
    });

    test('should override in one', () => {
        expect(
            JSON.stringify(ow.assign(
                {a: 1},
                {b: 2},
                {},
                {b:5},
                {a:6},
                {a:7},
                {b:3, s:5, a:0}
            ))
        ).toEqual(
            JSON.stringify({a: 0, b: 3, s:5})
        );
    });

    test('should avoid upper properties', () => {
        function Person() {}
        var me = new Person();
        Person.prototype.type = 'human';

        expect(
            JSON.stringify(ow.assign(me, {}))
        ).toEqual(
            JSON.stringify({})
        );
    });
    
    test('should avoid upper prototype (counterproof) properties', () => {
        function Person(n) {this.name = n;}
        var me = new Person('Federico');
        Person.prototype.type = 'human';

        expect(
            JSON.stringify(ow.assign(me, {}))
        ).toEqual(
            JSON.stringify({name: 'Federico'})
        );
    });

    
    test('∂ should be a pure function', () => {
        const inp = [{a: {a: {a: {a: {a:1}}}}}, {b: 2}, {}, {b:5}, {a:6}, {a:7}, {b:3, s:{s: {s: 5}}}],
            out = ow.assign.apply(null, inp);

        expect(
            JSON.stringify(out)
        ).toEqual(
            JSON.stringify({a: 7, b: 3, s:{s: {s: 5}}})
        );
        out.s.s.s = 'modified';
        expect(
            JSON.stringify(inp)
        ).toEqual(
            JSON.stringify([{a: {a: {a: {a: {a:1}}}}}, {b: 2}, {}, {b:5}, {a:6}, {a:7}, {b:3, s:{s: {s: 5}}}])
        )
    });
    
    test('should throw an exception', () => {
        try {
            ow.assign({}, [1,2,3]);
        } catch(e) {
            expect(e instanceof Error).toBe(true);
            expect(e.message).toEqual(ow.core.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);
        }
    });
    
});
