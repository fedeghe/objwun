const ow = require('../../dist');

describe('find', () => {
    describe('array', () => {

        test('should find the element, based on 1st level value', () => {
            expect(
                ow.find([1, 2, 3, 5, 6], (e, i) => e % 2 === 0)
            ).toEqual(
                2
            );
        });

        test('should find the index, based on 2nd level value', () => {
            const r = ow.find([{
                name: 'Federico'
            }, {
                name: 'John'
            },{
                name: 'Jeff'
            },{
                name: 'Coff'
            }],  (e, i) => e.name.match(/ff$/i) )
            expect(
                JSON.stringify(r)
            ).toEqual(
                JSON.stringify({name: 'Jeff'})
            );
        });

        test('should find the element, based on 3rd level value', () => {
            const r = ow.find([{
                name: 'Federico'
            }, {
                name: 'John',
                data: {
                    age: 23
                }
            },{
                name: 'Jeff',
            },{
                name: 'Coff',
                data: {
                    age: 33
                }
            }], (e, i) => e.data && e.data.age > 30 )
            expect(
                JSON.stringify(r)
            ).toEqual(
                JSON.stringify({
                    name: 'Coff',
                    data: {
                        age: 33
                    }
                })
            );
        });

        test('should not find the element', () => {
            expect(
                ow.find([1, 2, 3, 5, 6], (e, i) => e >10)
            ).toEqual(
                undefined
            );
        });

        test('should throw an error for the bad first argument', () => {
            try {
                ow.find(false);
            } catch (e) {
                expect(e instanceof Error).toEqual( true);
                expect(e.message).toEqual( "Invalid argument, object or array expected");
            }
        });

        test('should throw an error for the bad second argument', () => {
            try {
                ow.find([], false);
            } catch (e) {
                expect(e instanceof Error).toEqual( true);
                expect(e.message).toEqual( "Invalid argument, function expected");
            }
        });

        test('∂ should be a pure function', () => {
            const mult = a => a * a > 4,
                inp = [2, 4, 6],
                res = ow.find(inp, mult);
            expect(res).toEqual( 4);
            expect(
                JSON.stringify(inp)
            ).toEqual(
                JSON.stringify([2, 4, 6])
            );
        });
    });


    describe('object', () => {
        test('should find the element', () => {
            const f = ow.find({
                a: {i: 2},
                b: {i: 2},
                c: {i: 2},
                d: {i: 5},
                e: {i: 2}
            }, (e, i) => e.i >= 4)
            expect(
                JSON.stringify(f)
            ).toEqual(
                JSON.stringify({i: 5})
            );
        });

        test('should not find the element', () => {
            expect(
                ow.find({
                    a: 1, b: 2,c: 3,d: 4,e: 5
                }, (e, i) => e > 10)
            ).toEqual(undefined);
        });

        test('should throw an error for the bad second argument', () => {
            try {
                ow.find({}, false);
            } catch (e) {
                expect(e instanceof Error).toEqual( true);
                expect(e.message).toEqual( "Invalid argument, function expected");
            }
        });

        test('∂ should be a pure function', () => {
            const mult = a => a * a > 4,
                inp = {a: 2, b: 4, c: 6},
                res = ow.find(inp, mult);
            expect(res).toEqual( 4);
            expect(
                JSON.stringify(inp)
            ).toEqual(
                JSON.stringify({a: 2, b: 4, c: 6})
            );
        });
    });
});

