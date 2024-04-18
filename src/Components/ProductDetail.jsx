import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosHandler } from '../_lib/axiosHandler';
import ProductNotFound from './ProductNotFound';

export default function ProductDetail() {
    const params = useParams();
    const [loader, setLoader] = useState(true)
    const [notFound, setNotFound] = useState(false);
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const productId = params.productId;
        setLoader(true);
        axiosHandler.get(`products/${productId}`)
            .then(res => {
                if (res.status === 200) {
                    setLoader(false)
                    setProductData(res.data);
                } else {
                    setLoader(false)
                    setNotFound(true);
                }
            })
            .catch(err => {
                setLoader(false)
                setNotFound(true);
            })
    }, [])

    if (notFound) {
        return <ProductNotFound />
    }

    console.log(productData);
    return (
        <div>
            {
                loader ? "Loading" : (productData ? (
                    <div>
                        <h1>hello</h1>
                    </div>
                ) : null)
            }
        </div>
    )
}