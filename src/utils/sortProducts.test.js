import sortProducts from "./sortProducts";

const products = [
    {
        "brand": "Jean Paul Gaultier",
        "type": "Eau de Toilette",
        "name": "Jean Paul Gaultier Le Male Eau de Toilette",
        "price": 3395,
        "rating": 100
    },
    {
        "brand": "Lancôme",
        "type": "Eau de Parfum",
        "name": "Lancôme Trésor Eau de Parfum",
        "price": 4111,
        "rating": 99
    },
    {
        "brand": "Paco Rabanne",
        "type": "Eau de Toilette",
        "name": "Paco Rabanne 1 Million Eau de Toilette",
        "price": 5111,
        "rating": 98
    },
];

describe('Sort products', () => {
    it('should sort by most popular', () => {
        const sortByDesc = sortProducts(products, "", "most-popular");
        expect(sortByDesc[0].rating).toEqual(100);
    });
    it('should sort by name in an ascending order', () => {
        const sortByAsc = sortProducts(products, "name", "a-z");
        expect(sortByAsc[0].name).toEqual("Jean Paul Gaultier Le Male Eau de Toilette");
    });
    it('should sort by name in a ascending order', () => {
        const sortByDesc = sortProducts(products, "name", "z-a");
        expect(sortByDesc[0].name).toEqual("Paco Rabanne 1 Million Eau de Toilette");
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
  