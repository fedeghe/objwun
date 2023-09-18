const ow = require('../../dist');

describe('isEmpty', () => {
    test('should return true on empty string', () =>
        expect(ow.isEmpty('')).toEqual( true)
    );

    test('should return true on empty array', () =>
        expect(ow.isEmpty([])).toEqual( true)
    );

    test('should return false on non empty array', () =>
        expect(ow.isEmpty([1])).toEqual( false)
    );

    test('should return true on empty obj', () =>
        expect(ow.isEmpty({})).toEqual( true)
    );

    test('should return false on non empty obj', () =>
        expect(ow.isEmpty({a:1})).toEqual( false)
    );

    test('should return true on null', () =>
        expect(ow.isEmpty(null)).toEqual( true)
    );

    test('should return false on function', () =>
        expect(ow.isEmpty(() => {})).toEqual( false)
    );

    test('should avoid upper prototype properties', () => {
        function Person(n) {}
        var me = new Person('Federico')

        Person.prototype.type = 'human';
        expect(ow.isEmpty(me)).toEqual( true);
    });

    test('should avoid upper prototype (counterproof) properties', () => {
        function Person(n) {this.name = n}
        var me = new Person('Federico')

        expect(ow.isEmpty(me)).toEqual( false);
    });

    test('should throw an error for the missing argument', () => {
        try {
            ow.isEmpty()
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Missing expected argument");
        }
    });
    
    test('∂ should be a pure function', () => {
        const inp = [1,2,3],
            res = ow.isEmpty(inp);
        expect(res).toEqual( false);
        expect(JSON.stringify(inp)).toEqual( JSON.stringify([1,2,3]));
    });    

});
