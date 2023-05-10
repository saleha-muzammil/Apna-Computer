import React, { useState, useEffect } from 'react';
import './Product.css' ;

function MotherboardDisplay(props) {
 
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }

  return (
    <div className="product-grid">
                  <nav className="nav">
            <section class="nav_top">
            <h3 className="logoheader"> Choose Your Motherboard</h3>
            </section>
            </nav>
      <table>
      <div style={style}
        className='cooler-row'>
        {props.product.map((product, index) => (
          <div
           style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}><tr>
            <td>{product.pname}</td>
            <td>{product.price}</td>
            <td><button
             onClick={() => {
              localStorage.setItem('selectedmobo', JSON.stringify(product));
              console.log(localStorage.getItem('selectedmobo'));
              window.location.href = '/Partpicker';
            }}
             className="add-to-build-button">Add to build</button>
          </td></tr></div>
        ))}
      </div>
      </table>
    </div>
  );
}

export default MotherboardDisplay;