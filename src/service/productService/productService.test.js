import productService from './productService';

describe("Load products", () => {
    let products;
    beforeAll(async () => {
      //load products
      products = await productService();
    });

    it("successfully loaded products", () => {
        const product = products[0];
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('slug');
        expect(product).toHaveProperty('brand');
        expect(product).toHaveProperty('type');
        expect(product).toHaveProperty('image');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('size');
        expect(product).toHaveProperty('rating');
    });
});
  