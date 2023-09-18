var ow = require('../../dist');

describe('every', () => {
    describe('array' , () => {

        test('should return the expected, simple array', () => {
            expect(
                ow.every([1,2,3,5], e => e % 2 === 0)
                    ).toEqual(
                false
            );
            expect(
                ow.every([2,4,6,8], e => e % 2 === 0)
            ).toEqual(
                true
            );
        });

        test('should return true, array of object literals', () => 
            expect(ow.every([{
                name: 'Federico'
            }, {
                name:'John'
            }, {
                name: 'Pock'
            }], function (e) {
                return e.name.match(/o/);
            })).toEqual( true)
        );

        test('should return false', () => 
            expect(ow.every([{
                name: 'Federico'
            }, {
                name:'John'
            }, {
                name: 'Fluffy'
            }], function (e) {
                return e.name.match(/^Fff*/);
            })).toEqual( false)
        );

        test('∂ should be a pure function', () => {
            var o = [1, 2, 3],
                res = ow.every(o, el => el > 0);
            expect(res).toEqual( true);
            expect(JSON.stringify(o)).toEqual( JSON.stringify([1,2,3]));
        });  
    });

    describe('object' , () => {
        test('should return true, simple object literal', () => 
            expect(
                ow.every({a:1,b:2,c:9,d:5}, (e ,k) => e > 0)
            ).toEqual(
                true
            )
        );

        test('should return true, object of object literals', () => 
            expect(ow.every({
                    a: {
                        name: 'Federico'
                    }, 
                    b: {
                        name:'Fred'
                    },
                    c: {
                        name: 'Fluffy'
                    }
                },
                function (e, k) {
                    return k.length === 1 && e.name.match(/^F*/);
                })
            ).toEqual(
                true
            )
        );

        test('should return false', () => 
            expect(ow.every({
                name: 'Federico',
                name1:'John',
                name2: 'Fluffy'
            }, function (e, k) {
                return k.match(/^na/) && e.match(/^Fff*/);
            })).toEqual( false)
        );

        test('∂ should be a pure function', () => {
            var o = {a: 1, b: 2, c: 3},
                res = ow.every(o, el => Math.round(el) === el);
            expect(res).toEqual( true);
            expect(JSON.stringify(o)).toEqual( JSON.stringify({a: 1, b: 2, c: 3}));
        });  
    });

    test('should throw an error for the non array OR literal object argument', () => {
        try {
            ow.every(1, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, object or array expected");
        }
    });

    test('should throw an error for the non function argument', () => {
        try {
            ow.every([], 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, function expected");
        }
    });
});
