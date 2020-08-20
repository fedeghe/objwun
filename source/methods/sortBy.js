function sortBy(o, kf, vrs) {
    vrs = vrs || 1
    return (typeof kf === 'function') 
        ? o.sort(function (a, b) {
            return kf(a) < kf(b) ? -vrs : vrs
        })
        : o.sort(function (a, b) {
            return a[kf] < b[kf] ? -vrs : vrs
        })
}