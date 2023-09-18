const ow = require('../../dist');

describe('uniqBy', () => {
    test('should behave like uniq when a second parameter is not passed', () => expect(JSON.stringify(ow.uniqBy([1,1,2,3,2,3,1]))).toEqual( '[1,2,3]'));
    test('should return the expected when a string is passed',
        () => expect(
            JSON.stringify(ow.uniqBy([
                {a: 1, b: 1},
                {a: 1},
                {b: 3},
                {c: 4},
                {b: 77}
            ], 'a'))
        ).toEqual(
            JSON.stringify([{a:1,b:1},{b:3}])
        )
    );
    test('should return the expected when a function is passed',
        () => expect(
            JSON.stringify(ow.uniqBy([
                2.34,
                3.55,
                2.33
            ], Math.floor))
        ).toEqual(
            JSON.stringify([2.34, 3.55])
        )
    );
});
