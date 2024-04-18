import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosHandler } from '../_lib/axiosHandler';
import ProductNotFound from './ProductNotFound';
import { Rating } from 'react-simple-star-rating';
import ReactImageZoom from 'react-image-zoom';

export default function ProductDetail() {
    const params = useParams();
    const [loader, setLoader] = useState(true)
    const [notFound, setNotFound] = useState(false);
    const [productData, setProductData] = useState(null);
    const imageProp = {
        width:
            400,
        scale:
            1.5,
        height:
            300
    }

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
    }, [params.productId])

    if (notFound) {
        return <ProductNotFound />
    }

    console.log(productData);
    return (
        <div className='row py-5 px-4'>
            {
                loader ? "Loading" : (productData ? (
                    <>
                        <div className='col-md-5 col-12 productDetailImgDiv'>
                            <ReactImageZoom img={productData.thumbnail} {...imageProp} alt="" />
                        </div>
                        <div className='col-md-5 col-12'>
                            <h3 className='productTitle'>{productData.title}</h3>
                            <p className='productDesc'>{productData.description}</p>
                            <Rating readonly="true" initialValue={productData.rating} allowHover="true" className='productRating' />
                            <p className="productBrand"><span>Brand: </span>{productData.brand} || <span>Category: </span>{productData.category}</p>
                            <h4>Rs /{productData.price} -</h4>
                        </div>
                    </>
                ) : null)
            }
        </div>
    )
}