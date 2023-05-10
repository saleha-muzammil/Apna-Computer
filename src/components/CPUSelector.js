import React from 'react';
import CPUDisplay from './CPU';

export default function CPUSelector() {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const product_ = JSON.parse(localStorage.getItem('cpu'));
    if (product_ != null) {
      setProduct(product_);
    }
  }, []);

  console.log(product); 

  return (
    <div>
      <CPUDisplay product={product} />
    </div>
  );
}
