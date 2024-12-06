const ow = require('../../dist');

describe('compose', () => {
    test('should return the expected', () => {
        const upper = s => s.toUpperCase()
        const first3 = s => s.substring(0,3)
        const reverse = s => s.split('').reverse().join('')
        const composed1 = ow.compose(upper, first3)
        const composed2 = ow.compose(first3, upper, reverse)
        expect(composed1('abcdef')).toBe('ABC');
        expect(composed2('abcdef')).toBe('FED');
    });
});
