var assert = require('assert'),
    ow = require('../dist');

describe('debounce', () => {
    it('should debounce a simple function', () => {
        let t = 0;
        const f = ow.debounce(() => t+=4, 100);
        setTimeout(f,10)
        setTimeout(f,20)
        setTimeout(f,50)
        setTimeout(f,60) // only this matters
        setTimeout(() => {
            assert.strictEqual(t, 4);
        },300) //
    }); 
});
