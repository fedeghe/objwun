function fromEntries(a) {    
    core.mustBe.arr(a);
    return a.reduce(function (acc, el) {
        core.mustBe.arr(el);
        core.mustBe.sized(el, 2);
        acc[el[0]] = el[1];
        return acc;
    }, {});
}
