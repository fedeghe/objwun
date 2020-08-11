function isEmpty(o) {
    return o === ''
        || o === null
        || core.introspection.isUndefined(o)
        || (core.introspection.isArray(o) && o.length === 0)
        || (core.introspection.isObject(o) && (
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