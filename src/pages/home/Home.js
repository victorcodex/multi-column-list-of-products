import React, { useEffect, useState } from "react";
import productService from '../../service/productService/productService';
import getUniqueProducts from '../../utils/getUniqueProducts';
import sortProducts from '../../utils/sortProducts';
import convertCentsToEuro from '../../utils/convertCentsToEuro';
import RatingStars from '../../components/RatingStars/RatingStars';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import ProductFilterContainer from '../../components/ProductFilterContainer/ProductFilterContainer';
import { SelectInput, SelectInputLabel } from '../../components/SelectInput/SelectInput';
import { LoadingAnimationContainer, LoadingAnimation } from '../../components/LoadingAnimation/LoadingAnimation';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productListCopy, setProductListCopy] = useState([]);
  const [productListFiltered, setProductListFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterByBrandKeyword, setFilterByBrandKeyword] = useState("");
  const [filterByTypeKeyword, setFilterByTypeKeyword] = useState("");
  const intialSortBy = "most-popular";
  const [sortBy, setSortBy] = useState(intialSortBy);
  
  // load products
  useEffect(() => {
    productService().then(productsData => {
      setIsLoading(false);
      // copy of products list is needed for the product type filter
      setProductListCopy(productsData);
      // copy of products list is needed for the product brand filter
      setProductListFiltered(productsData);
      const sortedProducts = sortProducts(productsData, "name", intialSortBy);
      setProducts(sortedProducts);
    }).catch(error => {
      setIsLoading(false);
      throw new Error("Error loading products ", error);
    });
  }, []);


  // filter products by type
  const filterProductsByType = productType => {
    setFilterByBrandKeyword("");
    setFilterByTypeKeyword(productType);
    const sortedProducts = sortProducts(productListCopy, "name", sortBy);
    const filterProducts = sortedProducts.filter(product => product.type === productType);
    setProductListFiltered(filterProducts);
    setProducts(filterProducts);
  }

  // filter products by brand
  const filterProductsByBrand = productBrand => {
    setFilterByBrandKeyword(productBrand);
    const sortedProducts = sortProducts(productListFiltered, "name", sortBy);
    setProducts(sortedProducts.filter(product => product.brand === productBrand));
  }

  // sort products by brand in ascending or descending order 
  const handSortProducts = sortType => {
    const sortedProducts = sortProducts(products, "name", sortType);
    setProducts(sortedProducts);
  }

  return (
    <main>
      {isLoading ? 
      <LoadingAnimationContainer>
        <LoadingAnimation delay="1.5s" />
      </LoadingAnimationContainer> 
      : (
        <React.Fragment>
          <ProductFilterContainer>
            <SelectInput
              value={filterByTypeKeyword}
              onChange={e => {
                if (e.target.value !== "select") {
                }
                filterProductsByType(e.target.value);
              }}
              title="Select product type"
            >
              <option value="select" title="Select product type">Select product type</option>
              {getUniqueProducts(productListCopy, "type").map(item => (
                <option key={item.id} value={item.type} title={item.type}>{`${item.type} (${item.count})`}</option>
              ))}
            </SelectInput>
            <SelectInput
              value={filterByBrandKeyword}
              onChange={e => {
                if (e.target.value !== "select") {
                  filterProductsByBrand(e.target.value);
                }
              }}
              title="Select product brand"
            >
              <option value="select" title="Select product brand">Select product brand</option>
              {getUniqueProducts(productListFiltered, "brand").map(item => (
                <option key={item.id} value={item.brand} title={item.brand}>{`${item.brand} (${item.count})`}</option>
              ))}
          </SelectInput>
          <SelectInputLabel>Sort by:</SelectInputLabel>
          <SelectInput
              value={sortBy}
              onChange={e => {
                handSortProducts(e.target.value);
                setSortBy(e.target.value);
              }}
              title="Sort"
            >
              <option value="most-popular" title="Sort by most popular">Most popular</option>
              <option value="a-z" title="Sort by name A-Z">Name A-Z</option>
              <option value="z-a" title="Sort by name A-Z">Name Z-A</option>
              <option value="lowest-price" title="Sort by lowest price">Lowest price</option>
              <option value="highest-price" title="Sort by highest price">Highest price</option>
            </SelectInput>
          </ProductFilterContainer>
          <ProductsContainer>
              {products.map(product => (
                <figure key={product.id} title={product.name} className="product-box-item">
                  <img src={product.image} alt={product.name} />
                  <strong>
                    <figcaption>
                      {product.brand}
                    </figcaption>
                    <figcaption className="product-name">
                      {product.name}
                    </figcaption>
                    <figcaption className="product-type">
                      {product.type}
                    </figcaption>
                  </strong>
                  <figcaption className="product-price-wrapper">
                    {`from ${convertCentsToEuro(product.price)} / ${product.size}`}
                    <br />
                    <RatingStars rating={product.rating}>★★★★★</RatingStars>
                  </figcaption>
                </figure>
              ))}
          </ProductsContainer>
        </React.Fragment>
      )}
    </main>
  );
}

export default Home;
