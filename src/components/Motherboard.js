import React, { useState, useEffect } from 'react';

function MotherboardDisplay(props) {
 
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }

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
              localStorage.setItem('selectedmobo', JSON.stringify(product));
              console.log(localStorage.getItem('selectedmobo'));
              window.location.href = '/Partpicker';
            }}
             className="add-to-build-button">Add to build</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MotherboardDisplay;