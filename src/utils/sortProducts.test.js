import sortProducts from "./sortProducts";

const products = [
    {
        "id": "30103318",
        "brand": "Jean Paul Gaultier",
        "type": "Eau de Toilette",
        "price": 3395,
        "rating": 100
    },
    {
        "id": "30150001",
        "brand": "Lancôme",
        "type": "Eau de Parfum",
        "price": 4111,
        "rating": 99
    },
    {
        "id": "30170189",
        "brand": "Paco Rabanne",
        "type": "Eau de Toilette",
        "price": 5111,
        "rating": 98
    },
];

describe('Sort products', () => {
    it('should sort by most popular', () => {
        const sortByDesc = sortProducts(products, "", "most-popular");
        expect(sortByDesc[0].rating).toEqual(100);
    });
    it('should sort by brand in an ascending order', () => {
        const sortByAsc = sortProducts(products, "brand", "a-z");
        expect(sortByAsc[0].brand).toEqual("Jean Paul Gaultier");
    });
    it('should sort by brand in a ascending order', () => {
        const sortByDesc = sortProducts(products, "brand", "z-a");
        expect(sortByDesc[0].brand).toEqual("Paco Rabanne");
    });
    it('should sort by lowest price', () => {
        const sortByDesc = sortProducts(products, "", "lowest-price");
        expect(sortByDesc[0].price).toEqual(3395);
    });
    it('should sort by highest price', () => {
        const sortByDesc = sortProducts(products, "", "highest-price");
        expect(sortByDesc[0].price).toEqual(5111);
    });
});
  