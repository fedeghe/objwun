const uniq = new function () {
    var count = 0,
        self = this;
    this.prefix = 'uniq_';
    this.toString = function () {
        count += 1;
        return self.prefix + count;
    };
}