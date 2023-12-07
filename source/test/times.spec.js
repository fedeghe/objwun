const ow = require('../../dist');

describe('times', () => {

    
    test('should return a non empty array', () => {
        const rand = () => Math.random()
        expect(ow.times(3, rand).length).toEqual( 3);
    });

    test('should return the right array', () => {
        var res = ow.times(3, i => i*i),
            stringed = JSON.stringify(res);
        expect(stringed).toEqual( JSON.stringify([0,1,4]));
    });

    test('should use the context ', () => {
        var o = {
                mult: a => a*2,
                n: 4
            },
            res = ow.times(3, function(i) {
                return this.n * this.mult(i)
            }, o),
            stringed = JSON.stringify(res);
        expect(stringed).toEqual( JSON.stringify([0, 8, 16]));
    });

    test('should throw an error for the non number argument', () => {
        try {
            ow.times([])
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, number expected");
        }
    });

    test('should throw an error for the non function argument', () => {
        try {
            ow.times(3, 4)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, function expected");
        }
    });

    test('∂ should be a pure function', () => {
        var o = {
            mult: a => a*2,
            n: 4
        };
        ow.times(3, function(i) {
            return this.n * this.mult(i)
        }, o),
        expect(JSON.stringify(o)).toEqual( JSON.stringify({
            mult: a => a*2,
            n: 4
        }));
    });  
});
