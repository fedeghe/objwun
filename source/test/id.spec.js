const ow = require('../../dist');

describe('id', () => {
    
    test('should return a unique id', () => expect(!!`${ow.id}`.match(/id_\d+/)).toEqual(true));

    test('should not create collisions', () => {
        const double = `${ow.id}${ow.id}`,
            matches = double.match(/id_(\d+)/g),
            noCollisions = matches[0] !== matches[1];
        expect(noCollisions).toEqual( true);
    });
});
