import productlist from '../resources/productlist';

// simulating server loading with promise and setTimeout
const loadProducts = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(productlist);
      }, 2000);
    });
  }

export default loadProducts;