const ow = require('../../dist');

describe('findIndex', () => {
    describe('array', () => {
        test('should find the index, based on 1st level value', () => {
            expect(
                ow.findIndex([1,2,3,5,6], (e, i) => e % 2 === 0)
            ).toEqual(1);
        });

        test('should find the index, based on 2nd level value', () => {
            expect(
                ow.findIndex([{
                        name: 'Federico'
                    }, {
                        name: 'John'
                    },{
                        name: 'Jeff'
                    },{
                        name: 'Coff'
                    }],  (e, i) => e.name.match(/ff$/i)
                )
            ).toEqual(2);
        });

        test('should find the index, based on 3rd level value', () => {
            expect(ow.findIndex([{
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
            ).toEqual(3);
        });

        test('should not find the index', () => {
            expect(ow.findIndex([1,2,3,5,6], (e, i) => e >10)).toEqual(-1);
        });

        test('should throw an error for the bad first argument', () => {
            try {
                ow.findIndex(false);
            } catch (e) {
                expect(e instanceof Error).toEqual(true);
                expect(e.message).toEqual("Invalid argument, object or array expected");
            }
        });

        test('should throw an error for the bad second argument', () => {
            try {
                ow.findIndex([], false);
            } catch (e) {
                expect(e instanceof Error).toEqual(true);
                expect(e.message).toEqual("Invalid argument, function expected");
            }
        });

        test('∂ should be a pure function', () => {
            const mult = a => a * a > 4,
                inp = [2, 4, 6],
                res = ow.findIndex(inp, mult);
            expect(res).toEqual(1);
            expect(
                JSON.stringify(inp)
            ).toEqual(
                JSON.stringify([2, 4, 6])
            );
        });
    });

    describe('object', () => {
        test('should find the index, based on 1st level value', () => {
            expect(ow.findIndex({a: 1,b: 2,c: 3,d: 4,e: 6}, (e, i) => e >= 3)).toEqual('c');
        });

        test('should find the index, based on 2nd level value', () => {
            expect(ow.findIndex({
                p1: {name: 'Federico'},
                p2: {name: 'John'},
                p3: {name: 'Jeff'},
                p4: {name: 'Coff'}
            },  (e, i) => e.name.match(/ff$/i) )).toEqual('p3');
        });

        test('should not find the index', () => {
            expect(ow.findIndex({
                a: 1, b: 2, c: 3, d: 4, c: 5
            }, (e, i) => e > 10)).toEqual(-1);
        });

        test('should throw an error for the bad second argument', () => {
            try {
                ow.findIndex({}, false);
            } catch (e) {
                expect(e instanceof Error).toEqual( true);
                expect(e.message).toEqual( "Invalid argument, function expected");
            }
        });

        test('∂ should be a pure function', () => {
            const mult = a => a * a > 4,
                inp = {a: 2, b: 4, c: 6},
                res = ow.findIndex(inp, mult);
            expect(res).toEqual('b');
            expect(
                JSON.stringify(inp)
            ).toEqual(
                JSON.stringify({a: 2, b: 4, c: 6})
            );
        });
    });
});

