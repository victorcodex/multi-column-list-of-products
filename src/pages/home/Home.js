import React, { useEffect, useState } from "react";
import productlist from '../../resources/productlist';
import getUniqueProducts from '../../utils/getUniqueProducts';
import sortProducts from '../../utils/sortProducts';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterByBrandKeyword, setFilterByBrandKeyword] = useState("");
  const [filterByTypeKeyword, setFilterByTypeKeyword] = useState("");
  const intialSortBy = "most-popular";
  const [sortBy, setSortBy] = useState(intialSortBy);
  
  // load products
  useEffect(() => {
    const sortByAsc = sortProducts(productlist, "brand", intialSortBy);
    setProducts(sortByAsc);
  }, []);

  // filter products by brand
  const filterProductsByBrand = productBrand => {
    setFilterByTypeKeyword("");
    setFilterByBrandKeyword(productBrand);
    setProducts(productlist.filter(product => product.brand === productBrand));
  }

  // filter products by brand
  const filterProductsByType = productType => {
    setFilterByBrandKeyword("");
    setFilterByTypeKeyword(productType);
    setProducts(productlist.filter(product => product.type === productType));
  }

  // sort products by brand in ascending or descending order 
  const handSortProducts = sortType => {
    const sortedProducts = sortProducts(products, "brand", sortType);
    setProducts(sortedProducts);
  }

  return (
    <main>
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
            <option value="a-z" title="Select product type">Name A-Z</option>
            <option value="z-a" title="Select product type">Name Z-A</option>
            <option value="lowest-price" title="Select product type">Lowest price</option>
            <option value="highest-price" title="Select product type">Highest price</option>
          </select>
        </figure>
      </section>
      <section className="products-box">
        {products.map(product => (
          <figure key={product.id} title={product.name} className="product-box-item">
            <img src={product.image} alt={product.name} />
            <figcaption>
              {product.brand}
            </figcaption>
            <figcaption>
              {product.price}
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}

export default Home;
