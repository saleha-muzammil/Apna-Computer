import React from 'react'
import PSUDisplay from './PSU'

export default function PSUSelector() {
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
        const product_ = JSON.parse(localStorage.getItem('psu'));
        console.log(product)
        product_.map((productIndex) => {
            setProduct((prev) => [...prev, productIndex]);
        }
        )
    }, [product])
    return (
        <div>
            <PSUDisplay product={product} />
        </div>
    )
}
