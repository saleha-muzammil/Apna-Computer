import React, { useState, useEffect } from 'react';

function CoolerDisplay(props) {
  //const [products, setProducts] = useState([]);
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }

  /*useEffect(() => {
    fetch('/cpu') //replace with a query that just looks up the CPU database table
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);*/

  return (
    <div className="product-grid">
      <div style={style}
        className='cooler-row'>
        {props.product.map((product, index) => (
          <div
           style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}>
            {product.pname}
            {product.price}
            <button
             onClick={() => {
              localStorage.setItem('selectedcooler', JSON.stringify(product));
              console.log(localStorage.getItem('selectedcooler'));
              window.location.href = '/Partpicker';
            }}
             className="add-to-build-button">Add to build</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoolerDisplay;