function getMapper(fromFrom, fromTo, toFrom, toTo) {
    core.mustBe.num(fromFrom);
    core.mustBe.num(fromTo);
    core.mustBe.num(toFrom);
    core.mustBe.num(toTo);
    core.mustBe.num(toTo);
    core.mustBe.nonZero(fromTo - fromFrom);
    var gapRatio = (toTo - toFrom) / (fromTo - fromFrom);
    return function (v) {
        core.mustBe.num(v);
        var p = v - fromFrom;
        return toFrom + p * gapRatio;
    };
}