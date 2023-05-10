import React from 'react'
import CoolerDisplay from './Cooler';

function CoolerSelector() {
    const [product, setProduct] = React.useState([{
        pname: '',
        price: '',
        base: '',
        where:'',
        imageURL: '',
        siteURL: '', 
        at1:'',
        at2:'',
        at3:'',
        at4:''
    }]);
    React.useEffect(() => {
        const product_ = JSON.parse(localStorage.getItem('cooler'));
        //console.log(product);
        if (product_ != null) {
            setProduct(product_);
          }
        }, []);
    return (
        <div>
            <CoolerDisplay product={product} />
        </div>
    )
}

export default CoolerSelector ;