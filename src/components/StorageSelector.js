import React from 'react';
import StorageDisplay from './Storage';

export default function CPUSelector() {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const product_ = JSON.parse(localStorage.getItem('Storage'));
    if (product_ != null) {
      setProduct(product_);
    }
  }, []);

  console.log(product); 

  return (
    <div>
      <StorageDisplay product={product} />
    </div>
  );
}
