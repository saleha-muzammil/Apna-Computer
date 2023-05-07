import React from 'react'
import CoolerDisplay from './Cooler';

export default function CoolerSelector() {
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
        product_.map((productIndex) => {
            setProduct((prev) => [...prev, productIndex]);
        }
        )
    }, [])
    return (
        <div>
            <CoolerDisplay product={product} />
        </div>
    )
}