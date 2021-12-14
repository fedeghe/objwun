var assert = require('assert'),
    ow = require('../dist');

describe('some', () => {
    describe('array' , () => {
        it('should return true, simple array', () => 
            assert.strictEqual(
                ow.some([1,2,3,5], e => e % 2 === 0),
                true
            )
        );
        it('should return true, array of object literals', () => 
            assert.strictEqual(ow.some([{
                name: 'Federico'
            }, {
                name:'John'
            }, {
                name: 'Fluffy'
            }], function (e) {
                return e.name.match(/^F*/)
            }), true)
        );
        it('should return false', () => 
            assert.strictEqual(ow.some([{
                name: 'Federico'
            }, {
                name:'John'
            }, {
                name: 'Fluffy'
            }], function (e) {
                return e.name.match(/^Fff*/)
            }), false)
        );
        it('∂ should be a pure function', () => {
            var o = [1, 2, 3],
                res = ow.some(o, el => el % 2 === 0);
            assert.strictEqual(res, true);
            assert.strictEqual(JSON.stringify(o), JSON.stringify([1,2,3]));
        });  
    });
    describe('object' , () => {
        it('should return true, simple object literal', () => 
            assert.strictEqual(
                ow.some({a:1,b:2,c:{s:3},d:5}, (e ,k) => e ===2 && k === 'b'),
                true
            )
        );
        it('should return true, object of object literals', () => 
            assert.strictEqual(ow.some({
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
                }),
                true
            )
        );
        it('should return false', () => 
            assert.strictEqual(ow.some({
                name: 'Federico',
                name1:'John',
                name2: 'Fluffy'
            }, function (e, k) {
                return k.match(/^na/) && e.match(/^Fff*/)
            }), false)
        );
        it('∂ should be a pure function', () => {
            var o = {a: 1, b: 2, c: 3},
                res = ow.some(o, el => el % 2 === 0);
            assert.strictEqual(res, true);
            assert.strictEqual(JSON.stringify(o), JSON.stringify({a: 1, b: 2, c: 3}));
        });  
    });

    it('should throw an error for the non array OR literal object argument', () => {
        try {
            ow.some(1, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object or array expected");
        }
    });

    it('should throw an error for the non function argument', () => {
        try {
            ow.some([], 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });
});
