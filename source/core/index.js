var core = (function () {
    function arguments2array(a) {
        return [].slice.call(a, 0);
    }
    return {
        arguments2array: arguments2array
    }
})();
