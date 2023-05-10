import React from 'react';
import VideocardDisplay from './Videocard';

export default function CPUSelector() {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const product_ = JSON.parse(localStorage.getItem('Videocard'));
    if (product_ != null) {
      setProduct(product_);
    }
  }, []);

  console.log(product); 

  return (
    <div>
      <VideocardDisplay product={product} />
    </div>
  );
}
