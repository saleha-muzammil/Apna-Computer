import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CPU from './CPU.js';

function CPUDisplay() {
    const [products, setProducts] = useState([]);
    const history = useHistory();
  
    useEffect(() => {
      fetch('/products?type=CPU') //replace with a query that just looks up the CPU database table
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
  
    const handleAddToBuild = (product) => {
        const {image, base, price, where } = product;
        const updatedProduct = {
          ...product,
          image,
          base,
          price,
          where,
        };
        history.push({
            pathname: '/partpicker.js',
            state: { product: updatedProduct }
          });
      };
  
    return (
      <div className="product-grid">
        {products.map((product, index) => (
          <CPU
            imageURL={product.imageURL}
            base={product.base}
            price={product.price}
            where={product.where}
            key={index}
            name={product.pname}
            siteURL={product.siteURL}
            cores={product.cores}
            tpd={product.tpd}
            coreclock={product.coreclock}
            graphic={product.graphic}
            
            onAddToBuild={() => handleAddToBuild(product)}
          />
        ))}
      </div>
    );
  }
  
  export default CPUDisplay;