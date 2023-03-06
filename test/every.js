var assert = require('assert'),
    ow = require('../dist');

describe('every', () => {
    describe('array' , () => {

        it('should return the expected, simple array', () => {
            assert.strictEqual(
                ow.every([1,2,3,5], e => e % 2 === 0),
                false
            );
            assert.strictEqual(
                ow.every([2,4,6,8], e => e % 2 === 0),
                true
            );
        });

        it('should return true, array of object literals', () => 
            assert.strictEqual(ow.every([{
                name: 'Federico'
            }, {
                name:'John'
            }, {
                name: 'Pock'
            }], function (e) {
                return e.name.match(/o/);
            }), true)
        );

        it('should return false', () => 
            assert.strictEqual(ow.every([{
                name: 'Federico'
            }, {
                name:'John'
            }, {
                name: 'Fluffy'
            }], function (e) {
                return e.name.match(/^Fff*/);
            }), false)
        );

        it('∂ should be a pure function', () => {
            var o = [1, 2, 3],
                res = ow.every(o, el => el > 0);
            assert.strictEqual(res, true);
            assert.strictEqual(JSON.stringify(o), JSON.stringify([1,2,3]));
        });  
    });

    describe('object' , () => {
        it('should return true, simple object literal', () => 
            assert.strictEqual(
                ow.every({a:1,b:2,c:9,d:5}, (e ,k) => e > 0),
                true
            )
        );

        it('should return true, object of object literals', () => 
            assert.strictEqual(ow.every({
                    a: {
                        name: 'Federico'
                    }, 
                    b: {
                        name:'Fred'
                    },
                    c: {
                        name: 'Fluffy'
                    }
                },
                function (e, k) {
                    return k.length === 1 && e.name.match(/^F*/);
                }),
                true
            )
        );

        it('should return false', () => 
            assert.strictEqual(ow.every({
                name: 'Federico',
                name1:'John',
                name2: 'Fluffy'
            }, function (e, k) {
                return k.match(/^na/) && e.match(/^Fff*/);
            }), false)
        );

        it('∂ should be a pure function', () => {
            var o = {a: 1, b: 2, c: 3},
                res = ow.every(o, el => Math.round(el) === el);
            assert.strictEqual(res, true);
            assert.strictEqual(JSON.stringify(o), JSON.stringify({a: 1, b: 2, c: 3}));
        });  
    });

    it('should throw an error for the non array OR literal object argument', () => {
        try {
            ow.every(1, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object or array expected");
        }
    });

    it('should throw an error for the non function argument', () => {
        try {
            ow.every([], 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });
});
