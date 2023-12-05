const ow = require('../../dist');

describe('getMapper', () => {
    test('should return identical mapper', () => {
        var o = ow.getMapper(0,10,0,10);
        expect(o(1)).toEqual(1);
        expect(o(4)).toEqual(4);
        expect(o(9)).toEqual(9);
    });
    test('should return inverter mapper', () => {
        var o = ow.getMapper(0,10,10,0);
        expect(o(1)).toEqual(9);
        expect(o(4)).toEqual(6);
        expect(o(5)).toEqual(5);
        expect(o(9)).toEqual(1);
    });
    test('should return lens mapper', () => {
        var o = ow.getMapper(0,10,0,100);
        expect(o(1.1)).toEqual(11);
        expect(o(4.34)).toEqual(43.4);
        expect(o(5.12)).toEqual(51.2);
        expect(o(9)).toEqual(90);
    });

    test('should work also out of domain', () => {
        var o = ow.getMapper(0,10,0,100);
        expect(o(-10)).toEqual(-100);
        expect(o(20)).toEqual(200);
    });

    test('should throw an error in getter', () => {
        try{
            ow.getMapper(0,'aaaa',0,100);
        } catch(e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual('Invalid argument, integer expected');
        }
    });
    test('should throw an error in getter invalid range', () => {
        try{
            ow.getMapper(10,10,0,100);
        } catch(e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual('Non zero argument expedted');
        }
    });
    test('should throw an error in gettmapperer', () => {
        var m = ow.getMapper(0,10,0,100);
        try{
            m(3)
        } catch(e) {
            expect(e instanceof Error).toEqual( true);
            expect(e.message).toEqual('Non zero argument expedted');
        }
    });
    test('∂ should be a pure function', () => {
        const inp = [1,2,3,4];
        ow.getMapper.apply(null, inp);
        expect(JSON.stringify(inp)).toEqual( JSON.stringify([1,2,3,4]));
    });    
    test('∂ should return a pure function', () => {
        const inp = [1,2,3,4],
            m = ow.getMapper.apply(null, inp);
            p = 4,
            res = m(p);
        expect(res).toEqual(6);
        expect(p).toEqual(4);
    });    
});
