function debounce(func, delay) {
    var to;
    return function () {
        var args = [].slice.call(arguments),
          self = this;
        clearTimeout(to);
        to = setTimeout(function (){
          return func.apply(self, args);
        }, delay)
    }
}
