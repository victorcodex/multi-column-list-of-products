import React, { useEffect, useState } from "react";
import productlist from '../../resources/productlist';

function App() {
  const [products, setProducts] = useState([]);
  const [filterByBrandKeyword, setFilterByBrandKeyword] = useState("");
  const [filterByTypeKeyword, setFilterByTypeKeyword] = useState("");

  useEffect(() => {
    setProducts(productlist);
  }, []);

  // filter products by brand
  const filterProductsByBrand = productBrand => {
    setProducts(productlist.filter(product => product.brand === productBrand));
    console.log("e.target.value ", productBrand);
  }

  // filter products by brand
  const filterProductsByType = productType => {
    setProducts(productlist.filter(product => product.type === productType));
    console.log("filterProductsByType ", productType);
  }

  // get unique products by e.g brand
  const getUniqueProducts = keyName => {
    return productlist.filter((productA, index) => productlist.findIndex(productB => productA[keyName] === productB[keyName]) === index);
  }

  return (
    <main>
      <header style={{ position: "absolute"}}>
        <figure>
          <span>Brand:</span>
          <select
            value={filterByBrandKeyword}
            onChange={e => {
              if (e.target.value !== "select") {
                setFilterByBrandKeyword(e.target.value);
                filterProductsByBrand(e.target.value);
              }
            }}
            title="Select product brand"
          >
            <option value="select" title="Select">Select</option>
            {getUniqueProducts("brand").map(item => (
              <option key={item.id} value={item.brand} title={item.brand}>{item.brand}</option>
            ))}
        </select>
        </figure>
        <figure>
          <span>Type:</span>
          <select
            value={filterByTypeKeyword}
            onChange={e => {
              if (e.target.value !== "select") {
              }
              setFilterByTypeKeyword(e.target.value);
              filterProductsByType(e.target.value);
            }}
            title="Select product type"
          >
            <option value="select" title="Select">Select</option>
            {getUniqueProducts("type").map(item => (
              <option key={item.id} value={item.type} title={item.type}>{item.type}</option>
            ))}
        </select>
        </figure>
      </header>
        {products.map(product => (
            <section key={product.id} title={product.name}>
              <figure>
                <img src={product.image} alt={product.name} />
                <figcaption>
                  {product.brand}
                </figcaption>
                <figcaption>
                  {product.price}
                </figcaption>
              </figure>
          </section>
        ))}
    </main>
  );
}

export default App;
