var assert = require('assert'),
    ow = require('../dist');

describe('keyBy', () => {

    const original = [{
        name: 'a',
        num: 10
    },{
        name: 's',
        num: 4
    },{
        name: 'd',
        num: 1
    },{
        name: 'c',
        num: 6
    }];

    it('should return expected by `name` key', () => {
        assert.strictEqual(
            JSON.stringify(
                ow.keyBy(
                    original,
                    function(el){ return el.name }
                )
            ),
            JSON.stringify({
                a: {
                    name: 'a',
                    num: 10
                },
                s: {
                    name: 's',
                    num: 4
                },
                d: {
                    name: 'd',
                    num: 1
                },
                c: {
                    name: 'c',
                    num: 6
                }
            })
        );
    });

    it('should return expected by `num` key', () => {
        assert.strictEqual(
            JSON.stringify(ow.keyBy(
                original,
                function(el){ return el.num }
            )),
            JSON.stringify({
                10: {
                    name: 'a',
                    num: 10
                },
                4: {
                    name: 's',
                    num: 4
                },
                1: {
                    name: 'd',
                    num: 1
                },
                6: {
                    name: 'c',
                    num: 6
                }
            })
        );
    });

    it('should return expected by `num` key from key string', () => {
        assert.strictEqual(
            JSON.stringify(ow.keyBy(
                original,
                'num'
            )),
            JSON.stringify({
                10: {
                    name: 'a',
                    num: 10
                },
                4: {
                    name: 's',
                    num: 4
                },
                1: {
                    name: 'd',
                    num: 1
                },
                6: {
                    name: 'c',
                    num: 6
                }
            })
        );
    });
    it('should throw an error for the non array argument', () => {
        try {
            ow.keyBy({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });
    it('should throw an error for the non key or function argument', () => {
        try {
            ow.keyBy([], true)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, string or function expected");
        }
    });
    it('∂ should be a pure function',
        () => assert.strictEqual(JSON.stringify(original), JSON.stringify([{
            name: 'a',
            num: 10
        },{
            name: 's',
            num: 4
        },{
            name: 'd',
            num: 1
        },{
            name: 'c',
            num: 6
        }])));    
});
