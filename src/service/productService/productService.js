import productlist from '../../resources/productlist';

// simulating server loading with promise and setTimeout
const productService = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(productlist);
      }, 1000);
    });
  }

export default productService;