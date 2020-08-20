function sortBy(ar, kf, vrs) {
    vrs = vrs || 1
    return (typeof kf === 'function') 
        ? ar.sort(function (a, b) {
            return kf(a) < kf(b) ? -vrs : vrs
        })
        : ar.sort(function (a, b) {
            return a[kf] < b[kf] ? -vrs : vrs
        })
}