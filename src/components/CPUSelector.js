import React from 'react'
import CPUDisplay from './CPU';

export default function CPUSelector() {
    const [product, setProduct] = React.useState([{
        pname: '',
        price: '',
        imageURL: '',
    }]);
    React.useEffect(() => {
        const product_ = JSON.parse(localStorage.getItem('cpu'));
        //console.log(product);
        product_.map((productIndex) => {
            setProduct((prev) => [...prev, productIndex]);
        }
        )
    }, [])
    return (
        <div>
            <CPUDisplay product={product} />
        </div>
    )
}
