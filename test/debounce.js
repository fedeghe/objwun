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
        }, 300) //
    });
    it('should debounce a correctly on a context', () => {
        let t
        function sayHello() {
            t = `Hello from ${this.name}`
        }
        const Person = {
            name: 'Federico',
            sayHello : ow.debounce(sayHello, 100)
        };
        Person.sayHello();
        setTimeout(() => {
            assert.strictEqual(t, `Hello from ${Person.name}`);
        }, 200) //
    });
    it('should debounce a correctly on a instance', () => {
        let t
        function Person (name) {
            this.name = name;
        }
        Person.prototype.sayHello = ow.debounce(function (){
            t = `Hello from ${this.name}`
        }, 100);

        const me = new Person('Federico')
        me.sayHello();
        setTimeout(() => {
            assert.strictEqual(t, `Hello from ${me.name}`);
        }, 200) //
    });
    it('should cancel debounce', () => {
        let t = 0;
        const f = ow.debounce(() => t+=4, 100);
        f();
        f.cancel();
        setTimeout(() => {
            assert.strictEqual(t, 0);
        }, 200);
    });
    it('∂ should be a pure function', () => {
        const t = p => p*2
        ow.debounce(t, 100);
        assert.strictEqual(t(3), 6);
    });
});
