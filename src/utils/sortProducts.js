// sort products by brand in ascending or descending order 
const sortProducts = (products, keyName = "name", sortType) => {
    const productsCopy = [...products];
    // most popular
    if (sortType === "most-popular") {
        productsCopy.sort(( a, b ) =>  b.rating - a.rating);
    }
    // ascending
    if (sortType === "a-z") {
        productsCopy.sort(( a, b ) =>  a[keyName].localeCompare(b[keyName]));
    }
    // descending
    if (sortType === "z-a") {
        productsCopy.sort(( a, b ) =>  b[keyName].localeCompare(a[keyName]));
    }
    // lowest price
    if (sortType === "lowest-price") {
        productsCopy.sort(( a, b ) =>  a.price - b.price);
    }
    // highest price
    if (sortType === "highest-price") {
        productsCopy.sort(( a, b ) =>  b.price - a.price);
    }
    return productsCopy;
}

export default sortProducts;