const ow = require('../../dist');

describe('includes', () => {
    describe('array', () => {
        test('should return false', () =>
            expect(ow.includes([], null)).toEqual( false)
        );

        test('should return true on array integer', () =>
            expect(ow.includes([1,2,3, null], null)).toEqual( true)
        );

        test('should return true again on array integer', () =>
            expect(ow.includes([1,2,3, null], 2)).toEqual( true)
        );

        test('should return false on array integer', () => 
            expect(ow.includes([1,2,3, null], 5)).toEqual( false)
        );
  
        test('should throw an error for the missing argument', () => {
            try {
                ow.includes([])
            } catch (e) {
                expect(e instanceof Error).toEqual( true);
                expect(e.message).toEqual( "Missing expected argument");
            }
        });

        test('∂ should be a pure function', () => {
            const inp = [1,2,3],
                res = ow.includes(inp, 2);
            expect(res).toEqual( true);
            expect(JSON.stringify(inp)).toEqual( JSON.stringify([1,2,3]));
        });    
    });

    describe('object', () => {
        test('should return false', () =>
            expect(ow.includes({}, null)).toEqual( false)
        );

        test('should return true', () =>
            expect(ow.includes({
                a:1, b: 2, c: 3, d: null
            }, null)).toEqual( true)
        );

        test('should return true again', () =>
            expect(ow.includes({
                a: 1, b: 2, c: 3, d: null
            }, 2)).toEqual( true)
        );

        test('should return false on array integer', () =>
            expect(ow.includes({
                a: 1, b: 2, c: 3, d: null
            }, 5)).toEqual(false)
        );
 
        test('should throw an error for the missing argument', () => {
            try {
                ow.includes({})
            } catch (e) {
                expect(e instanceof Error).toEqual( true);
                expect(e.message).toEqual( "Missing expected argument");
            }
        });   

        test('∂ should be a pure function', () => {
            const inp = {a: 1, b: 2, d: 3},
                res = ow.includes(inp, 2);
            expect(res).toEqual( true);
            expect(JSON.stringify(inp)).toEqual( JSON.stringify({a: 1, b: 2, d: 3}));
        });    
    });
});
