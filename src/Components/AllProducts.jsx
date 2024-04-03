import axios from 'axios'
import React, { useEffect } from 'react'

export default function AllProducts() {
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>AllProducts</div>
    )
}