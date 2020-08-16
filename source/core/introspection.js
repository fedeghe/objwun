function isObj(o) {
    var t0 = String(o) !== o,
        t1 = o === Object(o),
        t2 = typeof o !== 'function',
        t3 = {}.toString.call(o).match(/\[object\sObject\]/);
    return t0 && t1 && t2 && !!(t3 && t3.length);
}

function isArr(o) {
    if (Array.isArray && Array.isArray(o)) {
        return true;
    }
    var t1 = String(o) !== o,
        t2 = ({}).toString.call(o).match(/\[object\sArray\]/);
    return t1 && !!(t2 && t2.length);
}

function isUndefined(o) {
    return typeof o === 'undefined'
}

core.in = {
    isArr: isArr,
    isUndefined: isUndefined,
    isObj: isObj,
};
