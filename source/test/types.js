var assert = require('assert'),
    ow = require('../dist');

describe('types', () => {
    describe('array', () => {
        it('empty array should be an array', () => assert.equal(ow.isArray([]), true));
        it('filled array should be an array', () => assert.equal(ow.isArray([1,2,3]), true));
        describe('counter cases', () => {
            it('function should not be an array', () => assert.equal(ow.isArray(() => {}), false));
            it('object should not be an array', () => assert.equal(ow.isArray({}), false));
            it('string should not be an array', () => assert.equal(ow.isArray(''), false));
            it('boolean should not be an array', () => assert.equal(ow.isArray(true), false));
            it('number should not be an array', () => assert.equal(ow.isArray(1), false));
            it('undefined should not be an array', () => assert.equal(ow.isArray(), false));
        })
    })
    describe('function', () => {
        it('should be a function, arrow notation', () => assert.equal(ow.isFunction(() => {}), true));
        it('should be a function, explicit', () => assert.equal(ow.isFunction(function _() {}), true));
        it('should be a function, ref', () => {
            var _ = function () {}
            assert.equal(ow.isFunction(_), true);
        });
        describe('counter cases', () => {
            it('array should not be a function', () => assert.equal(ow.isFunction([]), false));
            it('object should not be a function', () => assert.equal(ow.isFunction({}), false));
            it('string should not be a function', () => assert.equal(ow.isFunction(''), false));
            it('boolean should not be a function', () => assert.equal(ow.isFunction(true), false));
            it('number should not be a function', () => assert.equal(ow.isFunction(1), false));
            it('undefined should not be a function', () => assert.equal(ow.isFunction(), false));
        })
    })
    describe('object', () => {
        it('empty obj should be an object', () => assert.equal(ow.isObject({}), true));
        it('instance should be an object', () => {
            var T = function () {this.n = ''}
            assert.equal(ow.isObject(new T), true);
        });
        describe('counter cases', () => {
            it('array should not be an object', () => assert.equal(ow.isObject([]), false));
            it('function should not be an object', () => assert.equal(ow.isObject(() => {}), false));
            it('string should not be an object', () => assert.equal(ow.isObject(''), false));
            it('boolean should not be an object', () => assert.equal(ow.isObject(true), false));
            it('number should not be an object', () => assert.equal(ow.isObject(1), false));
            it('undefined should not be an object', () => assert.equal(ow.isObject(), false));
        })
    })
    describe('string', () => {
        it('string should be a string', () => assert.equal(ow.isString('asdas'), true));
        it('empty string should be a string', () => assert.equal(ow.isString(''), true));
        describe('counter cases', () => {
            it('array should not be a string', () => assert.equal(ow.isString([]), false));
            it('function should not be a string', () => assert.equal(ow.isString(() => {}), false));
            it('object should not be a string', () => assert.equal(ow.isString({}), false));
            it('boolean should not be a string', () => assert.equal(ow.isString(true), false));
            it('number should not be a string', () => assert.equal(ow.isString(1), false));
            it('undefined should not be a string', () => assert.equal(ow.isString(), false));
        });
    })
    describe('boolean', () => {
        it('false should be a boolean', () => assert.equal(ow.isBoolean(false), true));
        it('true should be a boolean', () => assert.equal(ow.isBoolean(true), true));
        describe('counter cases', () => { 
            describe('falsy', () => {
                it('falsy 0 should not be a boolean', () => assert.equal(ow.isBoolean(0), false));
                it('falsy -0 should not be a boolean', () => assert.equal(ow.isBoolean(-0), false));
                it('falsy 0n should not be a boolean', () => assert.equal(ow.isBoolean(0n), false));
                it('falsy \'\' should not be a boolean', () => assert.equal(ow.isBoolean(''), false));
                it('falsy null should not be a boolean', () => assert.equal(ow.isBoolean(null), false));
                it('falsy undefined should not be a boolean', () => assert.equal(ow.isBoolean(undefined), false));
                it('falsy NaN should not be a boolean', () => assert.equal(ow.isBoolean(NaN), false));
            })
            it('array should not be a boolean', () => assert.equal(ow.isBoolean([]), false));
            it('function should not be a boolean', () => assert.equal(ow.isBoolean(() => {}), false));
            it('object should not be a boolean', () => assert.equal(ow.isBoolean({}), false));
            it('string should not be a boolean', () => assert.equal(ow.isBoolean(''), false));
            it('number should not be a boolean', () => assert.equal(ow.isBoolean(1), false));
            it('undefined should not be a boolean', () => assert.equal(ow.isBoolean(), false));
        });
    })
    describe('number', () => {
        it('should be a number', () => assert.equal(ow.isNumber(3.14), true));
        it('pi should be a number', () => assert.equal(ow.isNumber(Math.PI), true));
        describe('counter cases', () => {
            it('array should not be a number', () => assert.equal(ow.isNumber([]), false));
            it('function should not be a number', () => assert.equal(ow.isNumber(() => {}), false));
            it('object should not be a number', () => assert.equal(ow.isNumber({}), false));
            it('string should not be a number', () => assert.equal(ow.isNumber(''), false));
            it('boolean should not be a number', () => assert.equal(ow.isNumber(true), false));
            it('undefined should not be a number', () => {
                let s
                assert.equal(ow.isNumber(s), false);
            });
        })
    })
    describe('undefined', () => {
        it('should be undefined', () => assert.equal(ow.isUndefined(), true));
        it('should also be undefined', () => {
            let s
            assert.equal(ow.isUndefined(s), true);
        });
        describe('counter cases', () => {
            it('array should not be undefined', () => assert.equal(ow.isUndefined([]), false));
            it('function should not be undefined', () => assert.equal(ow.isUndefined(() => {}), false));
            it('object should not be undefined', () => assert.equal(ow.isUndefined({}), false));
            it('string should not be undefined', () => assert.equal(ow.isUndefined(''), false));
            it('boolean should not be undefined', () => assert.equal(ow.isUndefined(true), false));
            it('number should not be undefined', () => assert.equal(ow.isUndefined(1), false));
        })
    })
    describe('defined', () => {
        it('should be defined', () => assert.equal(ow.isDefined(3), true));
        describe('counter cases', () => {
            it('allocated let should not be defined', function () {
                let t
                assert.equal(ow.isDefined(t), false);
            });
        })
    })
});
