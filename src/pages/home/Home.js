import React, { useEffect, useState } from "react";
import productlist from '../../resources/productlist';
import getUniqueProducts from '../../utils/getUniqueProducts';
import sortProducts from '../../utils/sortProducts';
import convertCentsToEuro from '../../utils/convertCentsToEuro';
import RatingStars from '../../components/RatingStars/RatingStars';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import { LoadingAnimationContainer, LoadingAnimation } from '../../components/LoadingAnimation/LoadingAnimation';

// simulating server loading with promise and setTimeout
const loadProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productlist);
    }, 2000);
  });
}

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterByBrandKeyword, setFilterByBrandKeyword] = useState("");
  const [filterByTypeKeyword, setFilterByTypeKeyword] = useState("");
  const intialSortBy = "most-popular";
  const [sortBy, setSortBy] = useState(intialSortBy);
  
  // load products
  useEffect(() => {
    loadProducts().then(productsData => {
      setIsLoading(false);
      const sortedProducts = sortProducts(productsData, "brand", intialSortBy);
      setProducts(sortedProducts);
    }).catch(error => {
      setIsLoading(false);
      throw new Error("Error loading products ", error);
    });
  }, []);

  // filter products by brand
  const filterProductsByBrand = productBrand => {
    setFilterByTypeKeyword("");
    setFilterByBrandKeyword(productBrand);
    const sortedProducts = sortProducts(productlist, "brand", sortBy);
    setProducts(sortedProducts.filter(product => product.brand === productBrand));
  }

  // filter products by brand
  const filterProductsByType = productType => {
    setFilterByBrandKeyword("");
    setFilterByTypeKeyword(productType);
    const sortedProducts = sortProducts(productlist, "brand", sortBy);
    setProducts(sortedProducts.filter(product => product.type === productType));
  }

  // sort products by brand in ascending or descending order 
  const handSortProducts = sortType => {
    const sortedProducts = sortProducts(products, "brand", sortType);
    setProducts(sortedProducts);
  }

  return (
    <main>
      {isLoading ? 
      <LoadingAnimationContainer>
        <LoadingAnimation delay="1.5s" />
      </LoadingAnimationContainer> 
      : (
        <>
          <section className="products-filter">
            <figure>
                <select
                  value={filterByBrandKeyword}
                  onChange={e => {
                    if (e.target.value !== "select") {
                      filterProductsByBrand(e.target.value);
                    }
                  }}
                  title="Select product brand"
                >
                  <option value="select" title="Select product brand">Select product brand</option>
                  {getUniqueProducts(productlist, "brand").map(item => (
                    <option key={item.id} value={item.brand} title={item.brand}>{`${item.brand} (${item.count})`}</option>
                  ))}
              </select>
              </figure>
              <figure>
                <select
                  value={filterByTypeKeyword}
                  onChange={e => {
                    if (e.target.value !== "select") {
                    }
                    filterProductsByType(e.target.value);
                  }}
                  title="Select product type"
                >
                  <option value="select" title="Select product type">Select product type</option>
                  {getUniqueProducts(productlist, "type").map(item => (
                    <option key={item.id} value={item.type} title={item.type}>{`${item.type} (${item.count})`}</option>
                  ))}
                </select>
              </figure>
              <figure>
              Sort by:
              <select
                  value={sortBy}
                  onChange={e => {
                    handSortProducts(e.target.value);
                    setSortBy(e.target.value);
                  }}
                  title="Sort"
                >
                  <option value="most-popular" title="Sort by most popular">Most popular</option>
                  <option value="a-z" title="Sort by brand A-Z">Brand A-Z</option>
                  <option value="z-a" title="Sort by brand A-Z">Brand Z-A</option>
                  <option value="lowest-price" title="Sort by lowest price">Lowest price</option>
                  <option value="highest-price" title="Sort by highest price">Highest price</option>
                </select>
              </figure>
          </section>
          <ProductsContainer>
              {products.map(product => (
                <figure key={product.id} title={product.name} className="product-box-item">
                  <img src={product.image} alt={product.name} />
                  <figcaption>
                    {product.brand}
                  </figcaption>
                  <figcaption className="product-type">
                    {product.type}
                  </figcaption>
                  <figcaption>
                    {`from ${convertCentsToEuro(product.price)} / ${product.size}`}
                    <br />
                    <RatingStars rating={product.rating}>★★★★★</RatingStars>
                  </figcaption>
                </figure>
              ))}
          </ProductsContainer>
        </>
      )}
    </main>
  );
}

export default Home;
