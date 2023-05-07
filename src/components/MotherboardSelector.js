import React from 'react'
import MotherboardDisplay from './Motherboard';

export default function MotherboardSelector() {
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
        const product_ = JSON.parse(localStorage.getItem('mobo'));
        console.log(product)
        product_.map((productIndex) => {
            setProduct((prev) => [...prev, productIndex]);
        }
        )
    }, [product])
    return (
        <div>
            <MotherboardDisplay product={product} />
        </div>
    )
}
