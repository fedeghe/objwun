const ow = require('../../dist');

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
        test('should be array',
            () => expect(
                ow.core.mustBe.arr([])
            ).toEqual(
                true
            )
        );

        Object.values(ow.omit(all, ['arr'])).forEach(el => {
            test(`should not be array`,
                () => {
                    try {
                        ow.core.mustBe.arr(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.defined', () => {
        test('should not be defined',
            () => {
                try {
                    ow.core.mustBe.defined()
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.MISSING_EXPECTED_ARGUMENT);
                }
            }
        );
        test('should not be defined',
            () => {
                try {
                    ow.core.mustBe.defined(undefined)
                } catch (e) {
                    expect(e instanceof Error).toEqual( true);
                    expect(e.message).toEqual( ow.core.errors.MISSING_EXPECTED_ARGUMENT);
                }
            }
        );
        Object.values(ow.omit(all, ['undefined'])).forEach(el => {
            test(`should be defined`,
                () => expect(
                    ow.core.mustBe.defined(el)
                ).toEqual(
                    true
                )
            );
        });
    });

    describe('.func', () => {
        test('should be function',
            () => expect(
                ow.core.mustBe.func(() => {})
            ).toEqual(
                true
            )
        );
        test('should be function',
            () => expect(
                ow.core.mustBe.func(function () {})
            ).toEqual(
                true
            )
        );
        Object.values(ow.omit(all, ['func1', 'func2'])).forEach(el => {
            test(`should not be function`,
                () => {
                    try {
                        ow.core.mustBe.func(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.bool', () => {
        test('should be boolean',
            () => expect(
                ow.core.mustBe.bool(true)
            ).toEqual(
                true
            )
        );
        test('should be boolean',
            () => expect(
                ow.core.mustBe.bool(false)
            ).toEqual(
                true
            )
        );
        Object.values(ow.omit(all, ['bool'])).forEach(el => {
            test(`should not be boolean`,
                () => {
                    try {
                        ow.core.mustBe.bool(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_BOOLEAN_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.num', () => {
        test('should be number',
            () => expect(
                ow.core.mustBe.num(1)
            ).toEqual(
                true
            )
        );
        Object.values(ow.omit(all, ['int'])).forEach(el => {
            test(`should not be number`,
                () => {
                    try {
                        ow.core.mustBe.num(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.obj', () => {
        test('should be object',
            () => expect(
                ow.core.mustBe.obj({})
            ).toEqual(
                true
            )
        );
        Object.values(ow.omit(all, ['obj'])).forEach(el => {
            test(`should not be object`,
                () => {
                    try {
                        ow.core.mustBe.obj(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.str', () => {
        test('should be string',
            () => expect(
                ow.core.mustBe.str("")
            ).toEqual(
                true
            )
        );
        Object.values(ow.omit(all, ['string'])).forEach(el => {
            test(`should not be object`,
                () => {
                    try {
                        ow.core.mustBe.str(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_STRING_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.funcOrStr', () => {
        test('should be funcOrStr',
            () => { 
                expect(ow.core.mustBe.funcOrStr("")).toEqual( {isStr: true, isFunc: false});
                expect(ow.core.mustBe.funcOrStr(()=>{})).toEqual( {isStr: false, isFunc: true});
            }
        );
        Object.values(ow.omit(all, ['func1', 'func2', 'string'])).forEach(el => {
            test(`should not be funcOrStr`,
                () => {
                    try {
                        ow.core.mustBe.funcOrStr(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.funcOrArr', () => {
        test('should be funcOrArr',
            () => { 
                expect(ow.core.mustBe.funcOrArr([])).toEqual( {isArr: true, isFunc: false});
                expect(ow.core.mustBe.funcOrArr(()=>{})).toEqual( {isArr: false, isFunc: true});
            }
        );
        Object.values(ow.omit(all, ['func1', 'func2', 'array'])).forEach(el => {
            test(`should not be funcOrArr`,
                () => {
                    try {
                        ow.core.mustBe.funcOrArr(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.objOrArr', () => {
        test('should be objOrArr',
            () => { 
                expect(ow.core.mustBe.objOrArr([])).toEqual( {isArr: true, isObj: false});
                expect(ow.core.mustBe.objOrArr({})).toEqual( {isArr: false, isObj: true});
            }
        );
        Object.values(ow.omit(all, ['obj', 'array'])).forEach(el => {
            test(`should not be objOrArr`,
                () => {
                    try {
                        ow.core.mustBe.objOrArr(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
                    }
                }
            );
        });
    });

    describe('.sized', () => {
        test('should be sized',
            () => { 
                expect(ow.core.mustBe.sized([], 0)).toEqual( true);
                expect(ow.core.mustBe.sized({}, 0)).toEqual( true);
                expect(ow.core.mustBe.sized([1,2,3], 3)).toEqual( true);
                expect(ow.core.mustBe.sized({a:1, b: 2}, 2)).toEqual( true);
            }
        );
        test('should not be sized',
            () => { 
                expect(ow.core.mustBe.sized([], 1)).toEqual( false);
                expect(ow.core.mustBe.sized({}, 1)).toEqual( false);
                expect(ow.core.mustBe.sized([1,2,3], 2)).toEqual( false);
                expect(ow.core.mustBe.sized({a:1, b: 2}, 4)).toEqual( false);
            }
        );
        Object.values(ow.omit(all, ['obj', 'array'])).forEach(el => {
            test(`should throw an exception about first parameter`,
                () => {
                    try {
                        ow.core.mustBe.sized(el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
                    }
                }
            );
        });
        Object.values(ow.omit(all, ['num'])).forEach(el => {
            test(`should throw an exception about second parameter`,
                () => {
                    try {
                        ow.core.mustBe.sized({}, el)
                    } catch (e) {
                        expect(e instanceof Error).toEqual( true);
                        expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);
                    }
                }
            );
        });
    });
});
