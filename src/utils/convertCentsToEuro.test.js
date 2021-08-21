import convertCentsToEuro from "./convertCentsToEuro";

describe('Convert Cents to euro', () => {
    it('should convert cents value to euro', () => {
        expect(convertCentsToEuro(3780)).toEqual('€37.80');
    });
});