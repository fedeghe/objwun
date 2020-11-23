function clone(a) {
    core.mustBe.objOrArr(a)
    return JSON.parse(JSON.stringify(a))
}