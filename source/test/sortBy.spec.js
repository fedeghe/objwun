const ow = require('../../dist');

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

    test('should return expected by `name` key asc', () => {
        expect(
            JSON.stringify(
                ow.sortBy(
                    unsorted,
                    el => el.name
                )
            )
        ).toEqual(
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

    test('should return expected by `name` key desc', () => {
        expect(
            JSON.stringify(ow.sortBy(
                unsorted,
                el => el.name,
                -1
            ))
        ).toEqual(
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

    test('should return expected by `num` key asc', () => {
        expect(
            JSON.stringify(ow.sortBy(
                unsorted,
                el => el.num
            ))
        ).toEqual(
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

    test('should return expected by `num` key, desc', () => {
        expect(
            JSON.stringify(ow.sortBy(unsorted,
                el => el.num,
                -1
            ))
        ).toEqual(
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

    test('should return expected by `name` key asc using string', () => {
        expect(
            JSON.stringify(
                ow.sortBy(
                    unsorted,
                    'name'
                )
            )
        ).toEqual(
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

    test('should return expected by `name` key desc using string', () => {
        expect(
            JSON.stringify(ow.sortBy(
                unsorted,
                'name',
                -1
            ))
        ).toEqual(
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

    test('should return expected by `num` key asc using string', () => {
        expect(
            JSON.stringify(ow.sortBy(
                unsorted,
                'num'
            ))
        ).toEqual(
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

    test('should return expected by `num` key, desc using string', () => {
        expect(
            JSON.stringify(ow.sortBy(unsorted,
                'num',
                -1
            ))
        ).toEqual(
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

    test('should throw an error for the non array argument', () => {
        try {
            ow.sortBy({}, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, array expected");
        }
    });

    test('should throw an error for the non string or function argument', () => {
        try {
            ow.sortBy([], 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, string or function expected");
        }
    });

    test('∂ should be a pure function', () => {
        var o = [{a: 1, n:'x'}, {a:2, n: 'a'}, {a:3, n: 'e'}];
        ow.sortBy(o,  'a');
        ow.sortBy(o,  (a, b) => a.n);
        
        expect(JSON.stringify(o)).toEqual( JSON.stringify(
            [{a: 1, n:'x'}, {a:2, n: 'a'}, {a:3, n: 'e'}]
        ));
    });  
});
