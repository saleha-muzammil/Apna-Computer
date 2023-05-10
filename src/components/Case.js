import React from 'react';
import './Product.css' ;

function CaseDisplay(props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }


  return (
    <div className="product-grid">
                  <nav className="nav">
            <section class="nav_top">
            <h3 className="logoheader"> Choose Your Case</h3>
            </section>
            </nav>
      <table>
      <div style={style}
        className='cpu-row'>
        {props.product.map((product, index) => (
          <div
           style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}>
            <tr>
            <td>{product.pname}</td>
            <td>{product.price}</td>
            <td><button
             onClick={() => {
              localStorage.setItem('selectedCase', JSON.stringify(product));
              console.log(localStorage.getItem('selectedCase'));
              window.location.href = '/partpicker';
            }}
             className="add-to-build-button">Add to build</button>
          </td></tr>
          </div>
        ))}
      </div>
      </table>
    </div>
  );
}

export default CaseDisplay;