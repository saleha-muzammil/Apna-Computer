import React from 'react'
import MemoryDisplay from './Memory';

export default function MemorySelector() {
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
        const product_ = JSON.parse(localStorage.getItem('memory'));
        console.log(product)
        product_.map((productIndex) => {
            setProduct((prev) => [...prev, productIndex]);
        }
        )
    }, [product])
    return (
        <div>
            <MemoryDisplay product={product} />
        </div>
    )
}
