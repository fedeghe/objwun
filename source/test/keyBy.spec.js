const ow = require('../../dist');

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

    test('should return expected by `name` key', () => {
        expect(
            JSON.stringify(
                ow.keyBy(
                    original,
                    function(el){ return el.name }
                )
            )
        ).toEqual(
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

    test('should return expected by `num` key', () => {
        expect(
            JSON.stringify(ow.keyBy(
                original,
                function(el){ return el.num }
            ))
        ).toEqual(
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

    test('should return expected by `num` key from key string', () => {
        expect(
            JSON.stringify(ow.keyBy(
                original,
                'num'
            ))
        ).toEqual(
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

    test('should throw an error for the non array argument', () => {
        try {
            ow.keyBy({}, 1)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, array expected");
        }
    });

    test('should throw an error for the non key or function argument', () => {
        try {
            ow.keyBy([], true)
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, string or function expected");
        }
    });
    
    test('∂ should be a pure function',
        () => expect(JSON.stringify(original)).toEqual( JSON.stringify([{
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
