const ow = require('../../dist');

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

        test('positive cases', () => {
            expect(ow.core.mustBe.arr([])).toEqual(true);
            expect(ow.core.mustBe.arr([{}, 1, false])).toEqual(true);
            expect(ow.core.mustBe.arr(new Array())).toEqual(true);
            expect(ow.core.mustBe.arr(Array.from({length: 0}))).toEqual(true);
        });
        const benchs = { ... benchsBase};
        delete benchs.arr;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.arr(benchs[bench]);
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);
                }    
            });    
        });

    });

    describe ('defined', () =>  {
        test('negative case', () => {
            try {
                ow.core.mustBe.defined();
            } catch (e) {
                expect(e instanceof Error).toEqual( true);
                expect(e.message).toEqual( ow.core.errors.MISSING_EXPECTED_ARGUMENT);
            } 
        });
           
        const benchs = { ... benchsBase}
        delete benchs.undefined;
        Object.keys(benchs).forEach(bench => {
            it(`positive ${bench}`, () => {
                expect(ow.core.mustBe.defined(benchs[bench])).toEqual( true);
            });    
        });

    });

    describe ('func', () =>  {
        test('positive cases', () => {
            expect(ow.core.mustBe.func(() => {})).toEqual( true);
        });
        const benchs = { ... benchsBase};
        delete benchs.func;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.func(benchs[bench]);
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);
                }    
            });    
        });

    });

    describe ('funcOrStr', () =>  {
        test('positive cases', () => {
            expect(ow.core.mustBe.funcOrStr(() => {})).toEqual( {isFunc: true, isStr: false});
            expect(ow.core.mustBe.funcOrStr("")).toEqual( {isFunc: false, isStr: true});
        });
        const benchs = { ... benchsBase};
        delete benchs.function;
        delete benchs.string;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.funcOrStr(benchs[bench]);
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);
                }    
            });    
        });
    });

    describe ('funcOrArr', () =>  {
        test('positive cases', () => {
            expect(ow.core.mustBe.funcOrArr(() => {})).toEqual( {isFunc: true, isArr: false});
            expect(ow.core.mustBe.funcOrArr([])).toEqual( {isFunc: false, isArr: true});
        });
        const benchs = { ... benchsBase};
        delete benchs.function;
        delete benchs.arr;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.funcOrArr(benchs[bench]);
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED);
                }    
            });    
        });
    });

    describe ('bool', () =>  {
        test('positive cases', () => {
            expect(ow.core.mustBe.bool(true)).toEqual( true);
            expect(ow.core.mustBe.bool(false)).toEqual( true);
        });

        const benchs = { ... benchsBase};
        delete benchs.bool;
 
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.bool(benchs[bench]);
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_BOOLEAN_EXPECTED);
                }    
            });    
        });
    });
    
    describe ('num', () =>  {
        test('positive cases', () => {
            expect(ow.core.mustBe.num(122)).toEqual( true);
        });
        const benchs = { ... benchsBase};
        delete benchs.num;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.num(benchs[bench]);
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);
                }    
            });    
        });

    });

    describe ('obj', () =>  {
        test('positive cases', () => {
            expect(ow.core.mustBe.obj({})).toEqual( true);
        });
        const benchs = { ... benchsBase};
        delete benchs.obj;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.obj(benchs[bench]);
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message,).toEqual(ow.core.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);
                }    
            });    
        });

    });
    
    describe ('objOrArr', () =>  {
        test('positive cases', () => {
            expect(ow.core.mustBe.objOrArr({})).toEqual( {isObj: true, isArr: false});
            expect(ow.core.mustBe.objOrArr([])).toEqual( {isObj: false, isArr: true});
        });
        const benchs = { ... benchsBase};
        delete benchs.obj;
        delete benchs.arr;
        Object.keys(benchs).forEach(bench => {
            it(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.objOrArr(benchs[bench]);
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
                }    
            });    
        });
    });
    
    describe ('string', () =>  {
        test('positive cases', () => {
            expect(ow.core.mustBe.str("hei")).toEqual( true);
            expect(ow.core.mustBe.str("")).toEqual( true);
            expect(ow.core.mustBe.str({}.toString())).toEqual( true);
        });
        const benchs = { ... benchsBase};
        delete benchs.string;
        Object.keys(benchs).forEach(bench => {
            test(`countercase ${bench}`, () => {
                try {
                    ow.core.mustBe.str(benchs[bench]);
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_STRING_EXPECTED);
                }    
            });    
        });
    });
});

