const ow = require('../../dist');

describe('memoize', () => {

    test('should return the expected', () => {
        var check = 0,
            m = ow.memoize(function (t, o) {
                check++;
                o = o ||1 ;
                return t*t*o;
            });
        expect(m(6,3)).toEqual( m(6,3));
        expect(m(6,3,2)).toEqual( m(6,3,2));
        expect(check).toEqual( 2);
    });

    test('should return the expected - using context', () => {
        var ctx = {
                u : 20
            },
            check = 0,
            m = ow.memoize(function (t) {
                check++;
                return t * t * this.u;
            }, ctx);
        expect( m(6)).toEqual( 720);
        expect( m(3)).toEqual( m(3));
        expect(check).toEqual( 2);
    });

    test('should allow to reset a memoized function', () => {
        var ctx = {
                u : 20
            },
            check = 0,
            m = ow.memoize(function (t) {
                check++;
                return t*t*this.u;
            }, ctx);
        expect( m(6)).toEqual( 720);
        expect( m(3)).toEqual(  m(3));
        expect(check).toEqual( 2);
        m.reset();
        m(3);
        expect(check).toEqual( 3);
    });

    test('should throw an error in case of unexpected arguments', () => {
        try {
            ow.memoize([])
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, function expected");
        }
    });
});
