import productlist from '../resources/productlist.json';
import getUniqueProducts from "./getUniqueProducts";

describe('Get Unique Products', () => {
    it('should return unique products', () => {
        expect(getUniqueProducts(productlist, "brand")[0]).toHaveProperty('count');
    });
});
  