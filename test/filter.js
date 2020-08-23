var assert = require('assert'),
    ow = require('../dist');

describe('filter', function () {
    it('should return true, simple array', function () {
        assert.equal(JSON.stringify(ow.filter([1,2,3,5,6], function (e) {
            return e % 2 === 0
        })), JSON.stringify([2,6]));
    });
    it('should return true, array of object literals', function () {
        var res = ow.filter([{
                name: 'Federico'
            }, {
                name:'John'
            }, {
                name: 'Fluffy'
            }], function (e) {
                return e.name.match(/^F/)
            });
        assert.equal(
            JSON.stringify(res),
            JSON.stringify([
                {name:'Federico'},
                {name:'Fluffy'}
            ])
        );
    });
    it('∂ should be a pure function', function () {
        const inp = [1,2,3,5,6]
        assert.equal(JSON.stringify(ow.filter(inp, function (e) {
            return e % 2 === 0
        })), JSON.stringify([2,6]));
        assert.equal(JSON.stringify(inp), JSON.stringify([1,2,3,5,6]));
        
    });
});
