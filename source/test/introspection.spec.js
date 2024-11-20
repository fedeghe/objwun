const ow = require('../../dist');

describe('introspection', () => {

    test('isArr', () => {
        test.each([
            ['is an array', [[]], true],
        ])(
            'should return the expected: %s',
            (_, argz, expected) => {
              expect(ow.core.isArr.apply(null, argz)).toBe(expected);
            }
        );
    });

    
});
