var assert = require('assert'),
    ow = require('../dist');

describe('core.mustBe', () => {

    const benchsBase = {
        "arr": [],
        "string": "",
        "obj": {},
        "number": 3243,
        "function": () => {},
        "undefined": undefined,
        "null": null,
        "boolean": true,
        "symbol": Symbol()
    };

    describe ('arr', () =>  {

        it('positive cases', () => {
            assert.strictEqual(ow.core.mustBe.arr([]), true);
            assert.strictEqual(ow.core.mustBe.arr([{}, 1, false]), true);
            assert.strictEqual(ow.core.mustBe.arr(new Array()), true);
            assert.strictEqual(ow.core.mustBe.arr(Array.from({length: 0})), true);
        });
        const benchs = { ... benchsBase};
        delete benchs.arr;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.arr(benchs[bench]);
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);
                }    
            });    
        });

    });

    describe ('defined', () =>  {
        it('negative case', () => {
            try {
                ow.core.mustBe.defined();
            } catch (e) {
                assert.strictEqual(e instanceof Error, true);
                assert.strictEqual(e.message, ow.core.errors.MISSING_EXPECTED_ARGUMENT);
            } 
        });
           
        const benchs = { ... benchsBase}
        delete benchs.undefined;
        Object.keys(benchs).forEach(bench => {
            it(`positive ${bench}`, () => {
                assert.strictEqual(ow.core.mustBe.defined(benchs[bench]), true);
            });    
        });

    });

    describe ('func', () =>  {
        it('positive cases', () => {
            assert.strictEqual(ow.core.mustBe.func(() => {}), true);
        });
        const benchs = { ... benchsBase};
        delete benchs.func;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.func(benchs[bench]);
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);
                }    
            });    
        });

    });

    describe ('funcOrStr', () =>  {
        it('positive cases', () => {
            assert.deepStrictEqual(ow.core.mustBe.funcOrStr(() => {}), {isFunc: true, isStr: false});
            assert.deepStrictEqual(ow.core.mustBe.funcOrStr(""), {isFunc: false, isStr: true});
        });
        const benchs = { ... benchsBase};
        delete benchs.function;
        delete benchs.string;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.funcOrStr(benchs[bench]);
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);
                }    
            });    
        });
    });

    describe ('funcOrArr', () =>  {
        it('positive cases', () => {
            assert.deepStrictEqual(ow.core.mustBe.funcOrArr(() => {}), {isFunc: true, isArr: false});
            assert.deepStrictEqual(ow.core.mustBe.funcOrArr([]), {isFunc: false, isArr: true});
        });
        const benchs = { ... benchsBase};
        delete benchs.function;
        delete benchs.arr;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.funcOrArr(benchs[bench]);
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED);
                }    
            });    
        });
    });

    describe ('bool', () =>  {
        it('positive cases', () => {
            assert.strictEqual(ow.core.mustBe.bool(true), true);
            assert.strictEqual(ow.core.mustBe.bool(false), true);
        });

        const benchs = { ... benchsBase};
        delete benchs.bool;
 
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.bool(benchs[bench]);
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_BOOLEAN_EXPECTED);
                }    
            });    
        });
    });
    
    describe ('num', () =>  {
        it('positive cases', () => {
            assert.strictEqual(ow.core.mustBe.num(122), true);
        });
        const benchs = { ... benchsBase};
        delete benchs.num;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.num(benchs[bench]);
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);
                }    
            });    
        });

    });

    describe ('obj', () =>  {
        it('positive cases', () => {
            assert.strictEqual(ow.core.mustBe.obj({}), true);
        });
        const benchs = { ... benchsBase};
        delete benchs.obj;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.obj(benchs[bench]);
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);
                }    
            });    
        });

    });
    
    describe ('objOrArr', () =>  {
        it('positive cases', () => {
            assert.deepStrictEqual(ow.core.mustBe.objOrArr({}), {isObj: true, isArr: false});
            assert.deepStrictEqual(ow.core.mustBe.objOrArr([]), {isObj: false, isArr: true});
        });
        const benchs = { ... benchsBase};
        delete benchs.obj;
        delete benchs.arr;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.objOrArr(benchs[bench]);
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
                }    
            });    
        });
    });
    
    describe ('string', () =>  {
        it('positive cases', () => {
            assert.strictEqual(ow.core.mustBe.str("hei"), true);
            assert.strictEqual(ow.core.mustBe.str(""), true);
            assert.strictEqual(ow.core.mustBe.str({}.toString()), true);
        });
        const benchs = { ... benchsBase};
        delete benchs.string;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.str(benchs[bench]);
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_STRING_EXPECTED);
                }    
            });    
        });
    });
});

