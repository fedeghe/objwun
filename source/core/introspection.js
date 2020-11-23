+function () {
    function isObj(o) {
        var t0 = String(o) !== o,
            t1 = o === Object(o),
            t2 = typeof o !== 'function',
            t3 = {}.toString.call(o).match(/\[object\sObject\]/);
        return t0 && t1 && t2 && !!(t3 && t3.length);
    }
    function isArr(o) {
        var t2 = ({}).toString.call(o).match(/\[object\sArray\]/);
        return String(o) !== o && !!(t2 && t2.length);
    }
    function isFunc(o) {
        return typeof o === 'function'
    }
    function isStr(o) {
        return typeof o === 'string'
    }
    function isBool(o) {
        return typeof o === 'boolean'
    }
    function isNum(o) {
        return typeof o === 'number'
    }
    function isUndef(o) {
        return typeof o === 'undefined'
    }
    function isDef(o) {
        return typeof o !== 'undefined'
    }
    function isSymbol(o) {
        return typeof o === 'symbol'
    }
    function isBigint(o) {
        return typeof o === 'bigint'
    }
    function isPrimitive(o) {
        return isNum(o) || isStr(o) || isBool(o)
            || isSymbol(o) || isUndef(o) || isBigint(o)
    }

    core.in = {
        isArr: isArr,
        isBool: isBool,
        isBigint: isBigint,
        isDef: isDef,
        isFunc: isFunc,
        isNum: isNum,
        isObj: isObj,
        isPrimitive: isPrimitive,
        isStr: isStr,
        isSymbol: isSymbol,
        isUndef: isUndef
    };
}()