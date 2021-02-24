var assert = require('assert'),
    ow = require('../dist');

describe('filter', () => {
    it('should return true, simple array', () => {
        assert.strictEqual(JSON.stringify(ow.filter([1,2,3,5,6], e => {
            return e % 2 === 0
        })), JSON.stringify([2,6]));
    });
    it('should return true, array of object literals', () => {
        var res = ow.filter([{
                name: 'Federico'
            }, {
                name:'John'
            }, {
                name: 'Fluffy'
            }], e => e.name.match(/^F/));
        assert.strictEqual(
            JSON.stringify(res),
            JSON.stringify([
                {name:'Federico'},
                {name:'Fluffy'}
            ])
        );
    });
    it('∂ should be a pure function', () => {
        const inp = [1,2,3,5,6]
        assert.strictEqual(JSON.stringify(ow.filter(inp, e => e % 2 === 0)), JSON.stringify([2,6]));
        assert.strictEqual(JSON.stringify(inp), JSON.stringify([1,2,3,5,6]));
        
    });
});
