const ow = require('../../dist');

describe('filter', () => {
    describe('array', () => {

        test('should return true, simple array', () => {
            expect(JSON.stringify(ow.filter([1,2,3,5,6], e => {
                return e % 2 === 0;
            }))).toEqual( JSON.stringify([2,6]));
        });

        test('should return true, array of object literals', () => {
            var res = ow.filter([{
                    name: 'Federico'
                }, {
                    name:'John'
                }, {
                    name: 'Fluffy'
                }], e => e.name.match(/^F/));
            expect(
                JSON.stringify(res)
            ).toEqual(
                JSON.stringify([
                    {name:'Federico'},
                    {name:'Fluffy'}
                ])
            );
        });

        test('∂ should be a pure function', () => {
            const inp = [1,2,3,5,6];
            expect(
                JSON.stringify(ow.filter(inp, e => e % 2 === 0))
            ).toEqual(
                JSON.stringify([2,6])
            );
            expect(
                JSON.stringify(inp)
            ).toEqual(
                JSON.stringify([1,2,3,5,6])
            );
            
        });
    });

    describe('object', () => {

        test('should return true, simple object', () => {
            expect(JSON.stringify(ow.filter({a:1,b:2,c:3,d:5,e:6}, e => {
                return e % 2 === 0;
            }))).toEqual( JSON.stringify({b:2,e:6}));
        });

        test('∂ should be a pure function', () => {
            const inp = {a:1,b:2,c:3,d:5,e:6};
            expect(
                JSON.stringify(ow.filter(inp, e => e % 2 === 0))
            ).toEqual(
                JSON.stringify({b: 2, e: 6})
            );
            expect(
                JSON.stringify(inp)
            ).toEqual(
                JSON.stringify({a:1,b:2,c:3,d:5,e:6})
            );
        });
    });
});
