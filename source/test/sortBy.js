var assert = require('assert'),
    ow = require('../dist');

describe('sortBy', function () {

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

    it('should return expected by `name` key asc', function () {
        assert.equal(
            JSON.stringify(
                ow.sortBy(
                    unsorted,
                    function(el){ return el.name }
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

    it('should return expected by `name` key desc', function () {
        assert.equal(
            JSON.stringify(ow.sortBy(
                unsorted,
                function(el){ return el.name},
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

    it('should return expected by `num` key asc', function () {
        assert.equal(
            JSON.stringify(ow.sortBy(
                unsorted,
                function(el){ return el.num }
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

    it('should return expected by `num` key, desc', function () {
        assert.equal(
            JSON.stringify(ow.sortBy(unsorted,
                function(el){ return el.num },
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
});
