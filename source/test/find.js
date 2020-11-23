var assert = require('assert'),
    ow = require('../dist');

describe('find', () => {
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
        assert.strictEqual(ow.find([1,2,3,5,6], (e, i) => e >10), null);
    });
    it('should throw an error for the bad first argument', () => {
        try {
            ow.find(false)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
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

