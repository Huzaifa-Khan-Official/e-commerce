import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [categories, setCategoris] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then(res => setCategoris(res.data))
            .catch(err => console.log(err))
    }, [])

    const selectCategory = (event) => {
        const value = event.target.value;
        axios.get(`https://dummyjson.com/products/category/${value}`)
            .then(res => console.log(res.data.products))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <select className="form-select mt-4" aria-label="Default select example" defaultValue={"selected"} onChange={selectCategory}>
                <option value="selected" disabled>Select Category</option>
                {
                    categories.map((value, index) => {
                        return (
                            <option value={value} key={index}>
                                {value}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}