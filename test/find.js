var assert = require('assert'),
    ow = require('../dist');

describe('find', () => {
    describe('array', () => {

        it('should find the element, based on 1st level value', () => {
            assert.strictEqual(ow.find([1,2,3,5,6], (e, i) => e % 2 === 0), 2);
        });
        it('should find the index, based on 2nd level value', () => {
            const r = ow.find([{
                name: 'Federico'
            }, {
                name: 'John'
            },{
                name: 'Jeff'
            },{
                name: 'Coff'
            }],  (e, i) => e.name.match(/ff$/i) )
            assert.strictEqual(JSON.stringify(r), JSON.stringify({
                name: 'Jeff'
            }));
        });
        it('should find the element, based on 3rd level value', () => {
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
            assert.strictEqual(JSON.stringify(r), JSON.stringify({
                name: 'Coff',
                data: {
                    age: 33
                }
            }));
        });
        it('should not find the element', () => {
            assert.strictEqual(ow.find([1,2,3,5,6], (e, i) => e >10), undefined);
        });
        it('should throw an error for the bad first argument', () => {
            try {
                ow.find(false)
            } catch (e) {
                assert.strictEqual(e instanceof Error, true);
                assert.strictEqual(e.message, "Invalid argument, object or array expected");
            }
        });
        it('should throw an error for the bad second argument', () => {
            try {
                ow.find([], false)
            } catch (e) {
                assert.strictEqual(e instanceof Error, true);
                assert.strictEqual(e.message, "Invalid argument, function expected");
            }
        });
        it('∂ should be a pure function', () => {
            const mult = a => a * a > 4,
                inp = [2, 4, 6],
                res = ow.find(inp, mult);
            assert.strictEqual(res, 4);
            assert.strictEqual(
                JSON.stringify(inp),
                JSON.stringify([2, 4, 6])
            );
        });
    });


    describe('object', () => {
        it('should find the element', () => {
            const f = ow.find({
                a:{i:2},
                b:{i:2},
                c:{i:2},
                d:{i:5},
                e:{i:2}
            }, (e, i) => e.i >=4)
            assert.strictEqual(
                JSON.stringify(f),
                JSON.stringify({i:5})
            );
        });
        it('should not find the element', () => {
            assert.strictEqual(ow.find({
                a: 1, b: 2,c: 3,d: 4,e: 5
            }, (e, i) => e >10), undefined);
        });
        it('should throw an error for the bad second argument', () => {
            try {
                ow.find({}, false)
            } catch (e) {
                assert.strictEqual(e instanceof Error, true);
                assert.strictEqual(e.message, "Invalid argument, function expected");
            }
        });
        it('∂ should be a pure function', () => {
            const mult = a => a * a > 4,
                inp = {a:2, b: 4, c: 6},
                res = ow.find(inp, mult);
            assert.strictEqual(res, 4);
            assert.strictEqual(
                JSON.stringify(inp),
                JSON.stringify({a:2, b: 4, c: 6})
            );
        });
    });
});

