var assert = require('assert'),
    ow = require('../dist');

describe('types', () => {
    describe('array', () => {
        it('empty array should be an array', () => assert.strictEqual(ow.isArray([]), true));
        it('filled array should be an array', () => assert.strictEqual(ow.isArray([1,2,3]), true));
        describe('counter cases', () => {
            it('function should not be an array', () => assert.strictEqual(ow.isArray(() => {}), false));
            it('object should not be an array', () => assert.strictEqual(ow.isArray({}), false));
            it('string should not be an array', () => assert.strictEqual(ow.isArray(''), false));
            it('boolean should not be an array', () => assert.strictEqual(ow.isArray(true), false));
            it('number should not be an array', () => assert.strictEqual(ow.isArray(1), false));
            it('undefined should not be an array', () => assert.strictEqual(ow.isArray(), false));
        })
    })
    describe('function', () => {
        it('should be a function, arrow notation', () => assert.strictEqual(ow.isFunction(() => {}), true));
        it('should be a function, explicit', () => assert.strictEqual(ow.isFunction(function _() {}), true));
        it('should be a function, ref', () => {
            var _ = function () {}
            assert.strictEqual(ow.isFunction(_), true);
        });
        describe('counter cases', () => {
            it('array should not be a function', () => assert.strictEqual(ow.isFunction([]), false));
            it('object should not be a function', () => assert.strictEqual(ow.isFunction({}), false));
            it('string should not be a function', () => assert.strictEqual(ow.isFunction(''), false));
            it('boolean should not be a function', () => assert.strictEqual(ow.isFunction(true), false));
            it('number should not be a function', () => assert.strictEqual(ow.isFunction(1), false));
            it('undefined should not be a function', () => assert.strictEqual(ow.isFunction(), false));
        })
    })
    describe('object', () => {
        it('empty obj should be an object', () => assert.strictEqual(ow.isObject({}), true));
        it('instance should be an object', () => {
            var T = function () {this.n = ''}
            assert.strictEqual(ow.isObject(new T), true);
        });
        describe('counter cases', () => {
            it('array should not be an object', () => assert.strictEqual(ow.isObject([]), false));
            it('function should not be an object', () => assert.strictEqual(ow.isObject(() => {}), false));
            it('string should not be an object', () => assert.strictEqual(ow.isObject(''), false));
            it('boolean should not be an object', () => assert.strictEqual(ow.isObject(true), false));
            it('number should not be an object', () => assert.strictEqual(ow.isObject(1), false));
            it('undefined should not be an object', () => assert.strictEqual(ow.isObject(), false));
        })
    })
    describe('string', () => {
        it('string should be a string', () => assert.strictEqual(ow.isString('asdas'), true));
        it('empty string should be a string', () => assert.strictEqual(ow.isString(''), true));
        describe('counter cases', () => {
            it('array should not be a string', () => assert.strictEqual(ow.isString([]), false));
            it('function should not be a string', () => assert.strictEqual(ow.isString(() => {}), false));
            it('object should not be a string', () => assert.strictEqual(ow.isString({}), false));
            it('boolean should not be a string', () => assert.strictEqual(ow.isString(true), false));
            it('number should not be a string', () => assert.strictEqual(ow.isString(1), false));
            it('undefined should not be a string', () => assert.strictEqual(ow.isString(), false));
        });
    })
    describe('boolean', () => {
        it('false should be a boolean', () => assert.strictEqual(ow.isBoolean(false), true));
        it('true should be a boolean', () => assert.strictEqual(ow.isBoolean(true), true));
        describe('counter cases', () => { 
            describe('falsy', () => {
                it('falsy 0 should not be a boolean', () => assert.strictEqual(ow.isBoolean(0), false));
                it('falsy -0 should not be a boolean', () => assert.strictEqual(ow.isBoolean(-0), false));
                it('falsy 0n should not be a boolean', () => assert.strictEqual(ow.isBoolean(0n), false));
                it('falsy \'\' should not be a boolean', () => assert.strictEqual(ow.isBoolean(''), false));
                it('falsy null should not be a boolean', () => assert.strictEqual(ow.isBoolean(null), false));
                it('falsy undefined should not be a boolean', () => assert.strictEqual(ow.isBoolean(undefined), false));
                it('falsy NaN should not be a boolean', () => assert.strictEqual(ow.isBoolean(NaN), false));
            })
            it('array should not be a boolean', () => assert.strictEqual(ow.isBoolean([]), false));
            it('function should not be a boolean', () => assert.strictEqual(ow.isBoolean(() => {}), false));
            it('object should not be a boolean', () => assert.strictEqual(ow.isBoolean({}), false));
            it('string should not be a boolean', () => assert.strictEqual(ow.isBoolean(''), false));
            it('number should not be a boolean', () => assert.strictEqual(ow.isBoolean(1), false));
            it('undefined should not be a boolean', () => assert.strictEqual(ow.isBoolean(), false));
        });
    })
    describe('number', () => {
        it('should be a number', () => assert.strictEqual(ow.isNumber(3.14), true));
        it('pi should be a number', () => assert.strictEqual(ow.isNumber(Math.PI), true));
        describe('counter cases', () => {
            it('array should not be a number', () => assert.strictEqual(ow.isNumber([]), false));
            it('function should not be a number', () => assert.strictEqual(ow.isNumber(() => {}), false));
            it('object should not be a number', () => assert.strictEqual(ow.isNumber({}), false));
            it('string should not be a number', () => assert.strictEqual(ow.isNumber(''), false));
            it('boolean should not be a number', () => assert.strictEqual(ow.isNumber(true), false));
            it('undefined should not be a number', () => {
                let s
                assert.strictEqual(ow.isNumber(s), false);
            });
        })
    })
    describe('undefined', () => {
        it('should be undefined', () => assert.strictEqual(ow.isUndefined(), true));
        it('should also be undefined', () => {
            let s
            assert.strictEqual(ow.isUndefined(s), true);
        });
        describe('counter cases', () => {
            it('array should not be undefined', () => assert.strictEqual(ow.isUndefined([]), false));
            it('function should not be undefined', () => assert.strictEqual(ow.isUndefined(() => {}), false));
            it('object should not be undefined', () => assert.strictEqual(ow.isUndefined({}), false));
            it('string should not be undefined', () => assert.strictEqual(ow.isUndefined(''), false));
            it('boolean should not be undefined', () => assert.strictEqual(ow.isUndefined(true), false));
            it('number should not be undefined', () => assert.strictEqual(ow.isUndefined(1), false));
        })
    })
    describe('defined', () => {
        it('should be defined', () => assert.strictEqual(ow.isDefined(3), true));
        describe('counter cases', () => {
            it('allocated let should not be defined', function () {
                let t
                assert.strictEqual(ow.isDefined(t), false);
            });
        })
    })
});
