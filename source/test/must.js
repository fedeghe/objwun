var assert = require('assert'),
    ow = require('../dist');

describe('core.mustBe', () => {

    const all = {
        bool: true,
        int: 1,
        string: "",
        arr: [],
        obj: {},
        func1: () => {},
        func2: function () {},
        'null': null,
        'undefined': undefined,
        symbol: Symbol()
    }

    describe('.arr', () => {
        it('should be array',
            () => assert.strictEqual(
                ow.core.mustBe.arr([]),
                true
            )
        );

        Object.values(ow.omit(all, ['arr'])).forEach(el => {
            it(`should not be array`,
                () => {
                    try {
                        ow.core.mustBe.arr(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.defined', () => {
        it('should not be defined',
            () => {
                try {
                    ow.core.mustBe.defined()
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.MISSING_EXPECTED_ARGUMENT);
                }
            }
        );
        it('should not be defined',
            () => {
                try {
                    ow.core.mustBe.defined(undefined)
                } catch (e) {
                    assert.strictEqual(e instanceof Error, true);
                    assert.strictEqual(e.message, ow.core.errors.MISSING_EXPECTED_ARGUMENT);
                }
            }
        );
        Object.values(ow.omit(all, ['undefined'])).forEach(el => {
            it(`should be defined`,
                () => assert.strictEqual(
                    ow.core.mustBe.defined(el),
                    true
                )
            );
        });
    });

    describe('.func', () => {
        it('should be function',
            () => assert.strictEqual(
                ow.core.mustBe.func(() => {}),
                true
            )
        );
        it('should be function',
            () => assert.strictEqual(
                ow.core.mustBe.func(function () {}),
                true
            )
        );
        Object.values(ow.omit(all, ['func1', 'func2'])).forEach(el => {
            it(`should not be function`,
                () => {
                    try {
                        ow.core.mustBe.func(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.bool', () => {
        it('should be boolean',
            () => assert.strictEqual(
                ow.core.mustBe.bool(true),
                true
            )
        );
        it('should be boolean',
            () => assert.strictEqual(
                ow.core.mustBe.bool(false),
                true
            )
        );
        Object.values(ow.omit(all, ['bool'])).forEach(el => {
            it(`should not be boolean`,
                () => {
                    try {
                        ow.core.mustBe.bool(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_BOOLEAN_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.num', () => {
        it('should be number',
            () => assert.strictEqual(
                ow.core.mustBe.num(1),
                true
            )
        );
        Object.values(ow.omit(all, ['int'])).forEach(el => {
            it(`should not be number`,
                () => {
                    try {
                        ow.core.mustBe.num(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.obj', () => {
        it('should be object',
            () => assert.strictEqual(
                ow.core.mustBe.obj({}),
                true
            )
        );
        Object.values(ow.omit(all, ['obj'])).forEach(el => {
            it(`should not be object`,
                () => {
                    try {
                        ow.core.mustBe.obj(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.str', () => {
        it('should be string',
            () => assert.strictEqual(
                ow.core.mustBe.str(""),
                true
            )
        );
        Object.values(ow.omit(all, ['string'])).forEach(el => {
            it(`should not be object`,
                () => {
                    try {
                        ow.core.mustBe.str(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_STRING_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.funcOrStr', () => {
        it('should be funcOrStr',
            () => { 
                assert.deepEqual(ow.core.mustBe.funcOrStr(""), {isStr: true, isFunc: false});
                assert.deepEqual(ow.core.mustBe.funcOrStr(()=>{}), {isStr: false, isFunc: true});
            }
        );
        Object.values(ow.omit(all, ['func1', 'func2', 'string'])).forEach(el => {
            it(`should not be funcOrStr`,
                () => {
                    try {
                        ow.core.mustBe.funcOrStr(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.funcOrArr', () => {
        it('should be funcOrArr',
            () => { 
                assert.deepEqual(ow.core.mustBe.funcOrArr([]), {isArr: true, isFunc: false});
                assert.deepEqual(ow.core.mustBe.funcOrArr(()=>{}), {isArr: false, isFunc: true});
            }
        );
        Object.values(ow.omit(all, ['func1', 'func2', 'array'])).forEach(el => {
            it(`should not be funcOrArr`,
                () => {
                    try {
                        ow.core.mustBe.funcOrArr(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.objOrArr', () => {
        it('should be objOrArr',
            () => { 
                assert.deepEqual(ow.core.mustBe.objOrArr([]), {isArr: true, isObj: false});
                assert.deepEqual(ow.core.mustBe.objOrArr({}), {isArr: false, isObj: true});
            }
        );
        Object.values(ow.omit(all, ['obj', 'array'])).forEach(el => {
            it(`should not be objOrArr`,
                () => {
                    try {
                        ow.core.mustBe.objOrArr(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.sized', () => {
        it('should be sized',
            () => { 
                assert.strictEqual(ow.core.mustBe.sized([], 0), true);
                assert.strictEqual(ow.core.mustBe.sized({}, 0), true);
                assert.strictEqual(ow.core.mustBe.sized([1,2,3], 3), true);
                assert.strictEqual(ow.core.mustBe.sized({a:1, b: 2}, 2), true);
            }
        );
        it('should not be sized',
            () => { 
                assert.strictEqual(ow.core.mustBe.sized([], 1), false);
                assert.strictEqual(ow.core.mustBe.sized({}, 1), false);
                assert.strictEqual(ow.core.mustBe.sized([1,2,3], 2), false);
                assert.strictEqual(ow.core.mustBe.sized({a:1, b: 2}, 4), false);
            }
        );
        Object.values(ow.omit(all, ['obj', 'array'])).forEach(el => {
            it(`should throw an exception about first parameter`,
                () => {
                    try {
                        ow.core.mustBe.sized(el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
                    }
                }
            );
        });
        Object.values(ow.omit(all, ['num'])).forEach(el => {
            it(`should throw an exception about second parameter`,
                () => {
                    try {
                        ow.core.mustBe.sized({}, el)
                    } catch (e) {
                        assert.strictEqual(e instanceof Error, true);
                        assert.strictEqual(e.message, ow.core.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);
                    }
                }
            );
        });
    });
});
