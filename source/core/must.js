+function () {
    function arr(a) {
        if (!core.in.isArr(a))
            throw new Error(core.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);
        return true;
    }

    function defined(a) {
        if (core.in.isUndef(a))
            throw new Error(core.errors.MISSING_EXPECTED_ARGUMENT);
        return true;
    }
    function func(a) {
        if (!core.in.isFunc(a))
            throw new Error(core.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);
        return true;
    }

    function bool(a) {
        if (!core.in.isBool(a))
            throw new Error(core.errors.INVALID_ARGUMENT_BOOLEAN_EXPECTED);
        return true;
    }

    function num(a) {
        if (!core.in.isNum(a))
            throw new Error(core.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);
        return true;
    }

    function obj(a) {
        if (!core.in.isObj(a))
            throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);
        return true;
    }

    function str(a) {
        if (!core.in.isStr(a))
            throw new Error(core.errors.INVALID_ARGUMENT_STRING_EXPECTED);
        return true;
    }

    // mixed
    function funcOrStr(a) {
        var isStr = core.in.isStr(a),
            isFunc = core.in.isFunc(a);
        if (!isStr && !isFunc)
            throw new Error(core.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);
        return {
            isFunc: isFunc,
            isStr: isStr,
        };
    }
    function funcOrArr(a) {
        var isArr = core.in.isArr(a),
            isFunc = core.in.isFunc(a);
        if (!isArr && !isFunc)
            throw new Error(core.errors.INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED);
        return {
            isFunc: isFunc,
            isArr: isArr
        };
    }
    function objOrArr(a) {
        var isArr = core.in.isArr(a),
            isObj = core.in.isObj(a);
        if (!isObj && !isArr)
            throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
        return {
            isObj: isObj,
            isArr: isArr,
        };
    }
    function sized(x, n) {
        var isArr = core.in.isArr(x),
            isObj = core.in.isObj(x);
        if (!isObj && !isArr)
            throw new Error(core.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);
        return (
            (isArr && x.length === n)
            ||
            (isObj && Object.values(x).length === n)
        );
    }


    core.mustBe = {
        arr: arr,
        defined: defined,
        func: func,
        funcOrStr: funcOrStr,
        funcOrArr: funcOrArr,
        bool: bool,
        num: num,
        obj: obj,
        objOrArr: objOrArr,
        sized: sized,
        str: str,
    };
}()