const ow = require('../../dist');

describe('merge', () => {
    describe('objects', function () {
        test('should return an empty object', () => {
            expect(JSON.stringify(ow.merge({}, {}, {}))).toEqual( '{}');
        });
        test('should return a merged object', () => {
            const merged = ow.merge({
                a: 1
            }, {
                b: 2
            }, {
                c: 3
            });
            expect(
                JSON.stringify(merged)
            ).toEqual(
                '{"a":1,"b":2,"c":3}'
            );
        });
        test('should return a merged object', () => {
            const merged = ow.merge({
                a: {aa:1}
            }, {
                b: 2
            }, {
                c: 3
            });
            expect(
                JSON.stringify(merged)
            ).toEqual(
                '{"a":{"aa":1},"b":2,"c":3}'
            );
        });
    });
    describe('arrays', function () {
        test('should return an empty array', () => {
            expect(JSON.stringify(ow.merge([], [], []))).toEqual( '[]');
        });
        test('should return a merged array', () => {
            const merged = ow.merge([{
                a: {aa:1}
            }], [{
                b: 2
            }], [{
                c: 3
            }]);
            expect(
                JSON.stringify(merged)
            ).toEqual(
                '[{"a":{"aa":1}},{"b":2},{"c":3}]'
            );
        });
    });
    test('should return null', () => {
        expect(
            ow.merge(1,4,3,[], {})
        ).toEqual(
            null
        );
    });
    test('should prevent prototype pollution', () => {
        const bad = '{"__proto__":{"you":"are screwed !"}}';
        let a = {};
        expect(a.oops).toEqual( undefined)
        ow.merge({}, JSON.parse(bad));
        expect(a.oops).toEqual( undefined)
    });
    test('should throw an error in case of mixed arguments', () => {
        try {
            ow.merge([], {})
        } catch (e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual( "Invalid argument, array expected");
        }
    });
});
