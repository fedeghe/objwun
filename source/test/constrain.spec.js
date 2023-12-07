const ow = require('../../dist');

describe('constrain', () => {

    test('should return the expected', () => {
        expect(ow.costrain(0,1,2)).toBe(1);
        expect(ow.costrain(3,1,2)).toBe(2);
        expect(ow.costrain(1.3,1,2)).toBe(1.3);
    });

});
