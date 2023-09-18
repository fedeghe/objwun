const ow = require('../../dist');

describe('intersection', () => {
    test('should work as expected', () =>
        expect(JSON.stringify(ow.intersection(
            [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5],
        ))).toEqual( JSON.stringify([1, 2, 3, 4, 5]))
    );

    test('should work as expected deeper', () => {
        expect(JSON.stringify(ow.intersection(
            [0, 1, 2, 3, 4, 5, 6], [1, 2, 3], [1, 2, 3, 4, 5],
        ))).toEqual( JSON.stringify([1, 2, 3]));

        expect(JSON.stringify(ow.intersection(
            [0, 2, 4, 5, 1, 4, 5, 'a', 'A', 33, 234, 3, 'c'],
            [0, 'a', 'A', 33, 'c'],
            [0, 'a', 'A', 234, 45, 'c']
        ))).toEqual( JSON.stringify([0, 'a', 'A', 'c']))
    });
    
    test('should work as expected also with strings', () =>
        expect(JSON.stringify(ow.intersection(
            [0, 'a', 2, 'b', 4, 'c', 6], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'e'],
        ))).toEqual( JSON.stringify(['a', 'b', 'c']))
    );
});