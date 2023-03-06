var assert = require('assert'),
    ow = require('../dist');

describe('findIndex', () => {
    describe('array', () => {
        it('should find the index, based on 1st level value', () => {
            assert.strictEqual(ow.findIndex([1,2,3,5,6], (e, i) => e % 2 === 0), 1);
        });

        it('should find the index, based on 2nd level value', () => {
            assert.strictEqual(ow.findIndex([{
                name: 'Federico'
            }, {
                name: 'John'
            },{
                name: 'Jeff'
            },{
                name: 'Coff'
            }],  (e, i) => e.name.match(/ff$/i) ), 2);
        });

        it('should find the index, based on 3rd level value', () => {
            assert.strictEqual(ow.findIndex([{
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
            }], (e, i) => e.data && e.data.age > 30 ), 3);
        });

        it('should not find the index', () => {
            assert.strictEqual(ow.findIndex([1,2,3,5,6], (e, i) => e >10), -1);
        });

        it('should throw an error for the bad first argument', () => {
            try {
                ow.findIndex(false);
            } catch (e) {
                assert.strictEqual(e instanceof Error, true);
                assert.strictEqual(e.message, "Invalid argument, object or array expected");
            }
        });

        it('should throw an error for the bad second argument', () => {
            try {
                ow.findIndex([], false);
            } catch (e) {
                assert.strictEqual(e instanceof Error, true);
                assert.strictEqual(e.message, "Invalid argument, function expected");
            }
        });

        it('∂ should be a pure function', () => {
            const mult = a => a * a > 4,
                inp = [2, 4, 6],
                res = ow.findIndex(inp, mult);
            assert.strictEqual(res, 1);
            assert.strictEqual(
                JSON.stringify(inp),
                JSON.stringify([2, 4, 6])
            );
        });
    });

    describe('object', () => {
        it('should find the index, based on 1st level value', () => {
            assert.strictEqual(ow.findIndex({a: 1,b: 2,c: 3,d: 4,e: 6}, (e, i) => e >= 3), 'c');
        });

        it('should find the index, based on 2nd level value', () => {
            assert.strictEqual(ow.findIndex({
                p1: {name: 'Federico'},
                p2: {name: 'John'},
                p3: {name: 'Jeff'},
                p4: {name: 'Coff'}
            },  (e, i) => e.name.match(/ff$/i) ), 'p3');
        });

        it('should not find the index', () => {
            assert.strictEqual(ow.findIndex({
                a: 1, b: 2, c: 3, d: 4, c: 5
            }, (e, i) => e > 10), -1);
        });

        it('should throw an error for the bad second argument', () => {
            try {
                ow.findIndex({}, false);
            } catch (e) {
                assert.strictEqual(e instanceof Error, true);
                assert.strictEqual(e.message, "Invalid argument, function expected");
            }
        });

        it('∂ should be a pure function', () => {
            const mult = a => a * a > 4,
                inp = {a: 2, b: 4, c: 6},
                res = ow.findIndex(inp, mult);
            assert.strictEqual(res, 'b');
            assert.strictEqual(
                JSON.stringify(inp),
                JSON.stringify({a: 2, b: 4, c: 6})
            );
        });
    });
});

