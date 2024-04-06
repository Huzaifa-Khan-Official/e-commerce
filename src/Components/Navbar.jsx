import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [categories, setCategoris] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then(res => setCategoris(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <ul>
                {
                    categories.map((value, index) => {
                        return (
                            <li key={index}>
                                {value}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}