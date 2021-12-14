function debounce(func, delay) {
    core.mustBe.func(func);
    core.mustBe.num(delay);
    var to,
        ret = function () {
            var args = [].slice.call(arguments),
                self = this;
            clearTimeout(to);
            to = setTimeout(function (){
                return func.apply(self, args);
            }, delay);
        };
    ret.cancel = function () {
        clearTimeout(to);
    }
    return ret
}
