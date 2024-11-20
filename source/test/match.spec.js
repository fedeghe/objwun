const ow = require('../../dist');

const o1 = {
        name:'Federico',
        surname: 'Ghedina'
    },
    o2 = {
        surname: 'Ghedina',
        name:'Federico'
    },
    o3 = {
        name:'Federico',
        surname: 'Ghedina'
    },
    // sub
    os1 = {
        name:'Federico',
        surname: 'Ghedina',
        N: {a: 1, b: 2}
    },
    os2 = {
        name:'Federico',
        surname: 'Ghedina',
        N: {b: 2, a: 1}
    },
    os3 = {
        name:'Federico',
        surname: 'Ghedina',
        N: {a: 1, b: 2}
    };


describe('match', () => {
    describe('should return true on all primitives', () => {
        test.each([
            ['2 integers', [12, 12], true],
            ['2 booleans', [true, true], true],
            ['2 booleans', [false, false], true],
            ['2 booleans', [false, true], false],
            ['2 strings', ['a string', 'a string'], true],
            ['2 strings', ['a string', 'another string'], false],
        ])(
            'should return the expected: %s',
            (_, argz, expected) => {
              expect(ow.match.apply(null, argz)).toBe(expected);
            }
        );
    })
    test.each([
        ['2 empty arrays', [[], []], true],
        ['2 empty objects', [{}, {}], true],
        ['1 object, one array', [{}, []], false],
        ['2 equal objects', [
            {a:1, b:[1,2,3], c:{d:4}},
            {a:1, b:[1,2,3], c:{d:4}}
        ], true],
        ['2 different objects', [
            {a:1, b:[1,2,3], c:{d:4}},
            {a:3, b:[1,6,3], c:{d:9}}
        ], false],
    ])(
        'should return the expected: %s',
        (_, argz, expected) => {
          expect(ow.match.apply(null, argz)).toBe(expected);
        }
    );

    const sorting = [
        ['two differently sorted objects - not sorting', [o1, o2], false],
        ['two differently sorted objects - sorting', [o1, o2, true], true],
        ['two equally sorted objects - not sorting', [o1, o3], true],
        ['two equally sorted objects - sorting', [o1, o3, true], true],
    ]
    test.each(sorting)(
        'should return the expected: %s',
        (_, argz, expected) => {
          expect(ow.match.apply(null, argz)).toBe(expected);
        }
    );

    describe('sorted version', () => {
        const sorting = [
            ['two differently sorted objects - not sorting', [os1, os2], false],
            ['two differently sorted objects - sorting', [os1, os2, true], true],
            ['two equally sorted objects - not sorting ', [os1, os3], true],
            ['two equally sorted objects - sorting ', [os1, os3, true], true],
        ]
        test.each(sorting)(
            'should return the expected: %s',
            (_, argz, expected) => {
              expect(ow.match.apply(null, argz)).toBe(expected);
            }
        );
    })

    
});
