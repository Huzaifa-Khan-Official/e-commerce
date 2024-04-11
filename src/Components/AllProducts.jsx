import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { axiosHandler } from '../_lib/axiosHandler';
import { useNavigate } from 'react-router-dom';

export default function AllProducts() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            navigate("/")
        }


        axiosHandler.get("products")
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Navbar />
            <div className='row justify-content-center mt-4 gap-4'>
                {
                    data.map((singleProduct, index) => {
                        return (
                            <div key={index} className='cardBody col-md-3 col-sm-5 col-12 rounded shadow mt-4 px-0'>
                                <img src={singleProduct.thumbnail} className="productImage rounded" alt="" />
                                <div className="cardHeading px-3 py-4">
                                    <div>
                                        <h3 className='productTitle'>{singleProduct.title}</h3>
                                        <p className='productDesc'>{singleProduct.description}</p>
                                        <p className="productRating">
                                            {singleProduct.rating}
                                        </p>
                                        <p className="productPrice">
                                            {singleProduct.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}