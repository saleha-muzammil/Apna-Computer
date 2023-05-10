import React from 'react';
import PSUDisplay from './PSU';

export default function PSUSelector() {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const product_ = JSON.parse(localStorage.getItem('PSU'));
    if (product_ != null) {
      setProduct(product_);
    }
  }, []);

  console.log(product); 

  return (
    <div>
      <PSUDisplay product={product} />
    </div>
  );
}
