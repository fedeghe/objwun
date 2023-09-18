const ow = require('../../dist');

describe('uniq', () => {
    test('should return the expected', () => expect(JSON.stringify(ow.uniq([1,1,2,3,2,3,1]))).toEqual( '[1,2,3]'));
});
