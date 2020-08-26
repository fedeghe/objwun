var assert = require('assert'),
    ow = require('../dist');

describe('remove', () => {
    it('should remove all elements given array keys', () => {
        const t = ow.remove(['a', 'b', 'c', 'd', 'e'], [0,2])
        assert.equal(JSON.stringify(t), JSON.stringify(['b', 'd', 'e']))
    });
    it('should remove all elements given array reversed keys', () => {
        const t = ow.remove(['a', 'b', 'c', 'd', 'e'], [2,0])
        assert.equal(JSON.stringify(t), JSON.stringify(['b', 'd', 'e']))
    });
    it('should remove all elements given removing function', () => {
        const t = ow.remove([{
            name: 'Federico',
            age:44
        }, {
            name: 'Cristiana',
            age: 45
        }, {
            name: 'Gabriele',
            age: 10
        }, {
            name: 'Francesca',
            age: 7
        }], (el, i) => el.age > 40)
        assert.equal(JSON.stringify(t), JSON.stringify([{
            name: 'Gabriele',
            age: 10
        }, {
            name: 'Francesca',
            age: 7
        }]))
    });
    it('should throw an error for the non array argument', () => {
        try {
            ow.remove({})
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });

    it('should throw an error for the non function or array argument', () => {
        try {
            ow.remove([1,2,3,4,5], 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array or function expected");
        }
    });
    it('∂ should be a pure function', () => {
        var o = [1, 2, 3],
            res = ow.remove(o, [1]);
        assert.equal(JSON.stringify(res), JSON.stringify([1,3]));
        assert.equal(JSON.stringify(o), JSON.stringify([1,2,3]));
    });  

})