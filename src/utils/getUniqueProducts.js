// get unique products and count by e.g brand
const getUniqueProducts = (productlist, keyName) => {
    const reduceProducts = (productMap, product) => {
      if (!productMap.has(product[keyName])) {
        productMap.set(product[keyName], { 
          ...product, 
          count: 0 
        });
      }
      productMap.get(product[keyName]).count++;
      return productMap;
    };
    const reducedProductsValues = [...productlist.reduce(reduceProducts, new Map()).values()];
    return reducedProductsValues;
  };

export default getUniqueProducts;