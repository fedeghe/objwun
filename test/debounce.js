var assert = require('assert'),
    ow = require('../dist');

describe('debounce', () => {
    it('should debounce a simple function', () => {
        let t = 0;
        const f = ow.debounce(() => t+=4, 50);
        setTimeout(f,10)
        setTimeout(f,20)
        setTimeout(f,50)
        setTimeout(f,60) // only this matters
        setTimeout(() => {
            assert.strictEqual(t, 4);
        }, 300) //
    });
    it('should debounce a correctly on a context', done => {
        let t
        function sayHello() {
            t = `Hello from ${this.name}`
        }
        const Person = {
            name: 'Federico',
            sayHello : ow.debounce(sayHello, 10)
        };
        Person.sayHello();
        setTimeout(() => {
            assert.strictEqual(t, `Hello from ${Person.name}`);
            done();
        }, 200) //
    });
    it('should debounce a correctly on an instance', done => {
        let t
        function Person (name) {
            this.name = name;
        }
        Person.prototype.sayHello = ow.debounce(function (){
            t = `Hello from ${this.name}`
        }, 10);

        const me = new Person('Federico')
        me.sayHello();
        setTimeout(() => {
            assert.strictEqual(t, `Hello from ${me.name}`);
            done();
        }, 200) //
    });
    it('should cancel debounce', done => {
        let t = 0;
        const f = ow.debounce(() => t+=4, 10);
        f();
        f.cancel();
        setTimeout(() => {
            assert.strictEqual(t, 0);
            done();
        }, 200);
    });
    it('∂ should be a pure function', () => {
        const t = p => p*2
        ow.debounce(t, 50);
        assert.strictEqual(t(3), 6);
    });
});
