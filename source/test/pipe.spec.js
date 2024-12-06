const ow = require('../../dist');

describe('compose', () => {
    test('should return the expected', () => {
        const upper = s => s.toUpperCase()
        const first3 = s => s.substring(0,3)
        const reverse = s => s.split('').reverse().join('')
        const piped1 = ow.pipe(upper, first3)
        const piped2 = ow.pipe(first3, upper, reverse)
        expect(piped1('abcdef')).toBe('ABC');
        expect(piped2('abcdef')).toBe('CBA');
    });
});
