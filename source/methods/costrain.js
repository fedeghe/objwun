function costrain(x, a, b) {
    core.mustBe.num(x);
    core.mustBe.num(a);
    core.mustBe.num(b);
    if (x < a) return a;
    if (x > b) return b;
    return x;
}