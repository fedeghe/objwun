const ow = require('../../dist');

describe('types', () => {
    describe('array', () => {
        test('empty array should be an array', () => expect(ow.isArray([])).toEqual( true));
        test('filled array should be an array', () => expect(ow.isArray([1,2,3])).toEqual( true));
        describe('counter cases', () => {
            test('function should not be an array', () => expect(ow.isArray(() => {})).toEqual( false));
            test('object should not be an array', () => expect(ow.isArray({})).toEqual( false));
            test('string should not be an array', () => expect(ow.isArray('')).toEqual( false));
            test('boolean should not be an array', () => expect(ow.isArray(true)).toEqual( false));
            test('number should not be an array', () => expect(ow.isArray(1)).toEqual( false));
            test('undefined should not be an array', () => expect(ow.isArray()).toEqual( false));
        })
    })
    describe('function', () => {
        test('should be a function, arrow notation', () => expect(ow.isFunction(() => {})).toEqual( true));
        test('should be a function, explicit', () => expect(ow.isFunction(function _() {})).toEqual( true));
        test('should be a function, ref', () => {
            var _ = function () {}
            expect(ow.isFunction(_)).toEqual( true);
        });
        describe('counter cases', () => {
            test('array should not be a function', () => expect(ow.isFunction([])).toEqual( false));
            test('object should not be a function', () => expect(ow.isFunction({})).toEqual( false));
            test('string should not be a function', () => expect(ow.isFunction('')).toEqual( false));
            test('boolean should not be a function', () => expect(ow.isFunction(true)).toEqual( false));
            test('number should not be a function', () => expect(ow.isFunction(1)).toEqual( false));
            test('undefined should not be a function', () => expect(ow.isFunction()).toEqual( false));
        })
    })
    describe('object', () => {
        test('empty obj should be an object', () => expect(ow.isObject({})).toEqual( true));
        test('instance should be an object', () => {
            var T = function () {this.n = ''}
            expect(ow.isObject(new T)).toEqual( true);
        });
        describe('counter cases', () => {
            test('array should not be an object', () => expect(ow.isObject([])).toEqual( false));
            test('function should not be an object', () => expect(ow.isObject(() => {})).toEqual( false));
            test('string should not be an object', () => expect(ow.isObject('')).toEqual( false));
            test('boolean should not be an object', () => expect(ow.isObject(true)).toEqual( false));
            test('number should not be an object', () => expect(ow.isObject(1)).toEqual( false));
            test('undefined should not be an object', () => expect(ow.isObject()).toEqual( false));
        })
    })
    describe('string', () => {
        test('string should be a string', () => expect(ow.isString('asdas')).toEqual( true));
        test('empty string should be a string', () => expect(ow.isString('')).toEqual( true));
        describe('counter cases', () => {
            test('array should not be a string', () => expect(ow.isString([])).toEqual( false));
            test('function should not be a string', () => expect(ow.isString(() => {})).toEqual( false));
            test('object should not be a string', () => expect(ow.isString({})).toEqual( false));
            test('boolean should not be a string', () => expect(ow.isString(true)).toEqual( false));
            test('number should not be a string', () => expect(ow.isString(1)).toEqual( false));
            test('undefined should not be a string', () => expect(ow.isString()).toEqual( false));
        });
    })
    describe('boolean', () => {
        test('false should be a boolean', () => expect(ow.isBoolean(false)).toEqual( true));
        test('true should be a boolean', () => expect(ow.isBoolean(true)).toEqual( true));
        describe('counter cases', () => { 
            describe('falsy', () => {
                test('falsy 0 should not be a boolean', () => expect(ow.isBoolean(0)).toEqual( false));
                test('falsy -0 should not be a boolean', () => expect(ow.isBoolean(-0)).toEqual( false));
                test('falsy 0n should not be a boolean', () => expect(ow.isBoolean(0n)).toEqual( false));
                test('falsy \'\' should not be a boolean', () => expect(ow.isBoolean('')).toEqual( false));
                test('falsy null should not be a boolean', () => expect(ow.isBoolean(null)).toEqual( false));
                test('falsy undefined should not be a boolean', () => expect(ow.isBoolean(undefined)).toEqual( false));
                test('falsy NaN should not be a boolean', () => expect(ow.isBoolean(NaN)).toEqual( false));
            })
            test('array should not be a boolean', () => expect(ow.isBoolean([])).toEqual( false));
            test('function should not be a boolean', () => expect(ow.isBoolean(() => {})).toEqual( false));
            test('object should not be a boolean', () => expect(ow.isBoolean({})).toEqual( false));
            test('string should not be a boolean', () => expect(ow.isBoolean('')).toEqual(false));
            test('number should not be a boolean', () => expect(ow.isBoolean(1)).toEqual( false));
            test('undefined should not be a boolean', () => expect(ow.isBoolean()).toEqual( false));
        });
    })
    describe('number', () => {
        test('should be a number', () => expect(ow.isNumber(3.14)).toEqual( true));
        test('pi should be a number', () => expect(ow.isNumber(Math.PI)).toEqual( true));
        describe('counter cases', () => {
            test('array should not be a number', () => expect(ow.isNumber([])).toEqual( false));
            test('function should not be a number', () => expect(ow.isNumber(() => {})).toEqual( false));
            test('object should not be a number', () => expect(ow.isNumber({})).toEqual( false));
            test('string should not be a number', () => expect(ow.isNumber('')).toEqual( false));
            test('boolean should not be a number', () => expect(ow.isNumber(true)).toEqual( false));
            test('undefined should not be a number', () => {
                let s
                expect(ow.isNumber(s)).toEqual( false);
            });
        })
    })
    describe('undefined', () => {
        test('should be undefined', () => expect(ow.isUndefined()).toEqual( true));
        test('should also be undefined', () => {
            let s
            expect(ow.isUndefined(s)).toEqual( true);
        });
        describe('counter cases', () => {
            test('array should not be undefined', () => expect(ow.isUndefined([])).toEqual( false));
            test('function should not be undefined', () => expect(ow.isUndefined(() => {})).toEqual( false));
            test('object should not be undefined', () => expect(ow.isUndefined({})).toEqual( false));
            test('string should not be undefined', () => expect(ow.isUndefined('')).toEqual( false));
            test('boolean should not be undefined', () => expect(ow.isUndefined(true)).toEqual( false));
            test('number should not be undefined', () => expect(ow.isUndefined(1)).toEqual( false));
        })
    })
    describe('defined', () => {
        test('should be defined', () => expect(ow.isDefined(3)).toEqual( true));
        describe('counter cases', () => {
            test('allocated let should not be defined', function () {
                let t
                expect(ow.isDefined(t)).toEqual( false);
            });
        });
    });
    describe('symbol', () => {
        test('should be a Symbol', () => expect(ow.isSymbol(Symbol('x'))).toEqual( true));
        test('should be a Symbol too', () => expect(ow.isSymbol(Symbol())).toEqual( true));
    });
    describe('bigint', () => {
        test('should be a BigInt', () => expect(ow.isBigint(22n)).toEqual( true));
        test('should be a BigInt too', () => expect(ow.isBigint(22n ** 78n)).toEqual( true));
    });
    describe('primitive', () => {
        test('should be a primitive, bigint', () => expect(ow.isPrimitive(22n)).toEqual( true));
        test('should be a primitive, int', () => expect(ow.isPrimitive(22)).toEqual( true));
        test('should be a primitive, boolean', () => expect(ow.isPrimitive(true)).toEqual( true));
        test('should be a primitive, symbol', () => expect(ow.isPrimitive(Symbol())).toEqual( true));
        test('should be a primitive, undefined', () => expect(ow.isPrimitive()).toEqual( true));
        describe('counter cases', () => {
            test('function should not be a primitive', function () {
                expect(ow.isPrimitive(function (){})).toEqual( false);
            });
            test('object should not be a primitive', function () {
                expect(ow.isPrimitive({})).toEqual( false);
            });
            test('array should not be a primitive', function () {
                expect(ow.isPrimitive([])).toEqual( false);
            });
        });
    });
});
