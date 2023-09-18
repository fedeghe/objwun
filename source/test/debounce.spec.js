const ow = require('../../dist');

describe('debounce', () => {

    test('should debounce a simple function', () => {
        let t = 0;
        const f = ow.debounce(() => t += 4, 50);
        setTimeout(f, 10);
        setTimeout(f, 20);
        setTimeout(f, 50);
        setTimeout(f, 60); // only this matters
        setTimeout(() => {
            expect(t).toEqual( 4);
        }, 300); //
    });

    test('should debounce a correctly on a context', done => {
        let t;
        function sayHello() {
            t = `Hello from ${this.name}`;
        }
        const Person = {
            name: 'Federico',
            sayHello : ow.debounce(sayHello, 10)
        };
        Person.sayHello();
        setTimeout(() => {
            expect(t).toEqual( `Hello from ${Person.name}`);
            done();
        }, 200); //
    });

    test('should debounce a correctly on an instance', done => {
        let t;
        function Person (name) {
            this.name = name;
        }
        Person.prototype.sayHello = ow.debounce(function (){
            t = `Hello from ${this.name}`;
        }, 10);

        const me = new Person('Federico');
        me.sayHello();
        setTimeout(() => {
            expect(t).toEqual( `Hello from ${me.name}`);
            done();
        }, 200); //
    });

    test('should cancel debounce', done => {
        let t = 0;
        const f = ow.debounce(() => t+=4, 10);
        f();
        f.cancel();
        setTimeout(() => {
            expect(t).toEqual( 0);
            done();
        }, 200);
    });

    test('∂ should be a pure function', () => {
        const t = p => p * 2;
        ow.debounce(t, 50);
        expect(t(3)).toEqual( 6);
    });

    test('should throw an exception - 1', () => {
        const o = 1;
        try {
            ow.debounce(o);
        } catch(e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);
        }
    });

    test('should throw an exception - 2', () => {
        try {
            ow.debounce(() => true, true);
        } catch(e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( ow.core.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);
        }
    });
});
