import sortProducts from "./sortProducts";

const products = [
    {
        "id": "30103318",
        "brand": "Jean Paul Gaultier",
        "type": "Eau de Toilette"
    },
    {
        "id": "30150001",
        "brand": "Lancôme",
        "type": "Eau de Parfum"
    },
    {
        "id": "30170189",
        "brand": "Paco Rabanne",
        "type": "Eau de Toilette"
    },
];

describe('Sort products', () => {
    it('should sort products by brand in an ascending order', () => {
        const sortByAsc = sortProducts(products, "brand", "a-z");
        expect(sortByAsc[0].brand).toEqual("Jean Paul Gaultier");
    });
    it('should sort products by brand in a ascending order', () => {
        const sortByDesc = sortProducts(products, "brand", "z-a");
        expect(sortByDesc[0].brand).toEqual("Paco Rabanne");
    });
});
  