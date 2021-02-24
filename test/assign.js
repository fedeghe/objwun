var assert = require('assert'),
    ow = require('../dist');

describe('assign', () => {
    it('should return an empty object', () => {
        assert.strictEqual(JSON.stringify(ow.assign()), '{}');
    });
    it('should return the passed arguments', () => {
        assert.strictEqual(
            JSON.stringify(ow.assign({a: 1}, {b: 2})),
            JSON.stringify({a: 1, b: 2})
        );
    });
    it('should ignore empty objs', () => {
        assert.strictEqual(
            JSON.stringify(ow.assign({a: 1}, {b: 2}, {}, {}, {c: 3}, {}, {d: 4})),
            JSON.stringify({a: 1, b: 2, c: 3, d: 4})
        );
    });
    it('should override on the way', () => {
        assert.strictEqual(
            JSON.stringify(ow.assign({a: 1}, {b: 2}, {}, {b:5}, {a:6})),
            JSON.stringify({a: 6, b: 5})
        );
    });
    it('should override on the way deeper', () => {
        assert.strictEqual(
            JSON.stringify(ow.assign({a: 1}, {b: 2}, {}, {b:5}, {a:6}, {a:7}, {b:3, s:5})),
            JSON.stringify({a: 7, b: 3, s:5})
        );
    });
    it('should override in one', () => {
        assert.strictEqual(
            JSON.stringify(ow.assign(
                {a: 1},
                {b: 2},
                {},
                {b:5},
                {a:6},
                {a:7},
                {b:3, s:5, a:0}
            )),
            JSON.stringify({a: 0, b: 3, s:5})
        );
    });
    it('should avoid upper properties', () => {
        function Person() {}
        var me = new Person()
        Person.prototype.type = 'human';

        assert.strictEqual(JSON.stringify(ow.assign(me, {})), JSON.stringify({}));
    });
    
    it('should avoid upper prototype (counterproof) properties', () => {
        function Person(n) {this.name = n}
        var me = new Person('Federico')
        Person.prototype.type = 'human';

        assert.strictEqual(JSON.stringify(ow.assign(me, {})), JSON.stringify({name: 'Federico'}));
    });

    
    it('∂ should be a pure function', () => {
        const inp = [{a: {a: {a: {a: {a:1}}}}}, {b: 2}, {}, {b:5}, {a:6}, {a:7}, {b:3, s:{s: {s: 5}}}],
            out = ow.assign.apply(null, inp);

        assert.strictEqual(
            JSON.stringify(out),
            JSON.stringify({a: 7, b: 3, s:{s: {s: 5}}})
        );
        out.s.s.s = 'modified'
        assert.strictEqual(
            JSON.stringify(inp),
            JSON.stringify([{a: {a: {a: {a: {a:1}}}}}, {b: 2}, {}, {b:5}, {a:6}, {a:7}, {b:3, s:{s: {s: 5}}}])
        )
    });
});
