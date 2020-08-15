function isEmpty(o) {
    return o === ''
        || o === null
        || core.in.isUndefined(o)
        || (core.in.isArray(o) && o.length === 0)
        || (core.in.isObject(o) && (
            (typeof Object.keys === 'function'
                && Object.keys(o).length === 0
                && o.constructor === Object
            )
            || ((function(){
                for(var i in o) {
                    if (o.hasOwnProperty(i)) return false
                }
            })())
        ))

}