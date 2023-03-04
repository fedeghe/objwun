

function clone(a) {
    var proto = Object.getPrototypeOf(a),
        newObject = structuredClone(a);
    Object.setPrototypeOf(newObject, proto);
    return newObject;
}