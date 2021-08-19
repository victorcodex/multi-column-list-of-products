import React from "react";
import productlist from '../../resources/productlist';

function App() {
  return (
    <main>
      <section>
        {productlist.map(product => (
          <div className="product-item-box" key={product.id} title={product.name}>
              <img src={product.image} alt={product.name} className="product__image"/>
              <p>{product.brand}</p> 
              <p>{product.price}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
