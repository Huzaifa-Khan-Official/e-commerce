import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar';
import { axiosHandler } from '../_lib/axiosHandler';
import { Link, useNavigate } from 'react-router-dom';
import { Data } from '../Context/Context';

export default function AllProducts() {
    const { data, setData } = useContext(Data);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            navigate("/")
        }


        axiosHandler.get("products")
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
    })

    return (
        <>
            <Navbar />
            <div className='row justify-content-center mt-4 gap-4'>
                {
                    data.length === 0 ? (
                        <p>Not Found</p>
                    ) : (
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
                                            <Link to={`${singleProduct.id}`}>
                                                See Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </>
    )
}