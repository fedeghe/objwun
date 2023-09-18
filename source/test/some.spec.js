const ow = require('../../dist');

describe('some', () => {
    describe('array' , () => {
        test('should return true, simple array', () => 
            expect(
                ow.some([1,2,3,5], e => e % 2 === 0)
            ).toEqual(
                true
            )
        );
        test('should return true, array of object literals', () => 
            expect(ow.some([{
                    name: 'Federico'
                }, {
                    name:'John'
                }, {
                    name: 'Fluffy'
                }], function (e) {
                    return e.name.match(/^F*/)
                })
            ).toEqual(true)
        );
        test('should return false', () => 
            expect(ow.some([{
                name: 'Federico'
            }, {
                name:'John'
            }, {
                name: 'Fluffy'
            }], function (e) {
                return e.name.match(/^Fff*/)
            })).toEqual(false)
        );
        test('∂ should be a pure function', () => {
            var o = [1, 2, 3],
                res = ow.some(o, el => el % 2 === 0);
            expect(res).toEqual( true);
            expect(JSON.stringify(o)).toEqual( JSON.stringify([1,2,3]));
        });  
    });
    describe('object' , () => {
        test('should return true, simple object literal', () => 
            expect(
                ow.some({a:1,b:2,c:{s:3},d:5}, (e ,k) => e ===2 && k === 'b')
            ).toEqual(true)
        );
        test('should return true, object of object literals', () => 
            expect(ow.some({
                    a: {
                        name: 'Federico'
                    }, 
                    b: {
                        name:'John'
                    },
                    c: {
                        name: 'Fluffy'
                    }
                },
                function (e, k) {
                    return k === 'c' && e.name.match(/^F*/)
                })
            ).toEqual(true)
        );
        test('should return false', () => 
            expect(ow.some({
                name: 'Federico',
                name1:'John',
                name2: 'Fluffy'
            }, function (e, k) {
                return k.match(/^na/) && e.match(/^Fff*/)
            })).toEqual( false)
        );
        test('∂ should be a pure function', () => {
            var o = {a: 1, b: 2, c: 3},
                res = ow.some(o, el => el % 2 === 0);
            expect(res).toEqual( true);
            expect(JSON.stringify(o)).toEqual( JSON.stringify({a: 1, b: 2, c: 3}));
        });  
    });

    test('should throw an error for the non array OR literal object argument', () => {
        try {
            ow.some(1, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, object or array expected");
        }
    });

    test('should throw an error for the non function argument', () => {
        try {
            ow.some([], 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, function expected");
        }
    });
});
