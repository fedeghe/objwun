var assert = require('assert'),
    ow = require('../dist');

describe('sortBy', () => {

    const unsorted = [{
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

    it('should return expected by `name` key asc', () => {
        assert.strictEqual(
            JSON.stringify(
                ow.sortBy(
                    unsorted,
                    el => el.name
                )
            ),
            JSON.stringify([{
                name: 'a',
                num: 10
            },{
                name: 'c',
                num: 6
            },{
                name: 'd',
                num: 1
            },{
                name: 's',
                num: 4
            }])
        );
    });

    it('should return expected by `name` key desc', () => {
        assert.strictEqual(
            JSON.stringify(ow.sortBy(
                unsorted,
                el => el.name,
                -1
            )),
            JSON.stringify([{
                name: 's',
                num: 4
            },{
                name: 'd',
                num: 1
            },{
                name: 'c',
                num: 6
            },{
                name: 'a',
                num: 10
            }])
        );
    });

    it('should return expected by `num` key asc', () => {
        assert.strictEqual(
            JSON.stringify(ow.sortBy(
                unsorted,
                el => el.num
            )),
            JSON.stringify([{
                name: 'd',
                num: 1
            },{
                name: 's',
                num: 4
            },{
                name: 'c',
                num: 6
            },{
                name: 'a',
                num: 10
            }])
        );
    });

    it('should return expected by `num` key, desc', () => {
        assert.strictEqual(
            JSON.stringify(ow.sortBy(unsorted,
                el => el.num,
                -1
            )),
            JSON.stringify([{
                name: 'a',
                num: 10
            },{
                name: 'c',
                num: 6
            },{
                name: 's',
                num: 4
            },{
                name: 'd',
                num: 1
            }])
        );
    });

    it('should return expected by `name` key asc using string', () => {
        assert.strictEqual(
            JSON.stringify(
                ow.sortBy(
                    unsorted,
                    'name'
                )
            ),
            JSON.stringify([{
                name: 'a',
                num: 10
            },{
                name: 'c',
                num: 6
            },{
                name: 'd',
                num: 1
            },{
                name: 's',
                num: 4
            }])
        );
    });

    it('should return expected by `name` key desc using string', () => {
        assert.strictEqual(
            JSON.stringify(ow.sortBy(
                unsorted,
                'name',
                -1
            )),
            JSON.stringify([{
                name: 's',
                num: 4
            },{
                name: 'd',
                num: 1
            },{
                name: 'c',
                num: 6
            },{
                name: 'a',
                num: 10
            }])
        );
    });

    it('should return expected by `num` key asc using string', () => {
        assert.strictEqual(
            JSON.stringify(ow.sortBy(
                unsorted,
                'num'
            )),
            JSON.stringify([{
                name: 'd',
                num: 1
            },{
                name: 's',
                num: 4
            },{
                name: 'c',
                num: 6
            },{
                name: 'a',
                num: 10
            }])
        );
    });

    it('should return expected by `num` key, desc using string', () => {
        assert.strictEqual(
            JSON.stringify(ow.sortBy(unsorted,
                'num',
                -1
            )),
            JSON.stringify([{
                name: 'a',
                num: 10
            },{
                name: 'c',
                num: 6
            },{
                name: 's',
                num: 4
            },{
                name: 'd',
                num: 1
            }])
        );
    });

    it('should throw an error for the non array argument', () => {
        try {
            ow.sortBy({}, 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });

    it('should throw an error for the non string or function argument', () => {
        try {
            ow.sortBy([], 1)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, string or function expected");
        }
    });

    it('∂ should be a pure function', () => {
        var o = [{a: 1, n:'x'}, {a:2, n: 'a'}, {a:3, n: 'e'}];
        ow.sortBy(o,  'a');
        ow.sortBy(o,  (a, b) => a.n);
        
        assert.strictEqual(JSON.stringify(o), JSON.stringify(
            [{a: 1, n:'x'}, {a:2, n: 'a'}, {a:3, n: 'e'}]
        ));
    });  
});
