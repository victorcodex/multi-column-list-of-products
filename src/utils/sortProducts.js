// sort products by brand in ascending or descending order 
const sortProducts = (products, keyName, sortType) => {
    const productsCopy = [...products];
    // ascending
    if (sortType === "a-z") {
        productsCopy.sort(( a, b ) =>  a[keyName].localeCompare(b[keyName]));
    }
    // // descending
    if (sortType === "z-a") {
        productsCopy.sort(( a, b ) =>  b[keyName].localeCompare(a[keyName]));
    }
    return productsCopy;
}

export default sortProducts;