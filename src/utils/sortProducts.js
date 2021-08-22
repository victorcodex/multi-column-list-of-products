// sort products by brand in ascending or descending order 
const sortProducts = (products, keyName = "name", sortType) => {
    const productsCopy = [...products];
    switch(sortType) {
        case "most-popular":
            return productsCopy.sort(( a, b ) =>  b.rating - a.rating);
        case "a-z":
            return productsCopy.sort(( a, b ) =>  a[keyName].localeCompare(b[keyName]));
        case "z-a":
            return productsCopy.sort(( a, b ) =>  b[keyName].localeCompare(a[keyName]));
        case "lowest-price":
            return productsCopy.sort(( a, b ) =>  a.price - b.price);
        case "highest-price":
            return productsCopy.sort(( a, b ) =>  b.price - a.price);
        default:
            throw new Error("sortType is required");
    }
}

export default sortProducts;