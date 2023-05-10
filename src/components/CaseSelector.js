import React from 'react';
import CaseDisplay from './Case';

export default function CPUSelector() {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const product_ = JSON.parse(localStorage.getItem('case'));
    if (product_ != null) {
      setProduct(product_);
    }
  }, []);

  console.log(product); 

  return (
    <div>
      <CaseDisplay product={product} />
    </div>
  );
}
