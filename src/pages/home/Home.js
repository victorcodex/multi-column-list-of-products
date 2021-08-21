import React, { useEffect, useState } from "react";
import productlist from '../../resources/productlist';
import getUniqueProducts from '../../utils/getUniqueProducts';

function App() {
  const [products, setProducts] = useState([]);
  const [filterByBrandKeyword, setFilterByBrandKeyword] = useState("");
  const [filterByTypeKeyword, setFilterByTypeKeyword] = useState("");

  useEffect(() => {
    setProducts(productlist);
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
  const sortProducts = sortType => {
    const sortedProducts = [...products];
    // ascending
    if (sortType === "a-z") {
      sortedProducts.sort(( a, b ) =>  a.brand.localeCompare(b.brand));
    }
    // // descending
    if (sortType === "z-a") {
      sortedProducts.sort(( a, b ) =>  b.brand.localeCompare(a.brand));
    }
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
              <option key={item.id} value={item.type} title={item.type}>{`${item.brand} (${item.count})`}</option>
            ))}
          </select>
        </figure>
        <figure>
          <span onClick={() => sortProducts("a-z")}>A - Z</span>
          <span onClick={() => sortProducts("z-a")}>Z - A</span>
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

export default App;
