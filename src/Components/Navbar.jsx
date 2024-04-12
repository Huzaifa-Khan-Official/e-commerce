import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Data } from '../Context/Context';

export default function Navbar() {
    const [categories, setCategoris] = useState([]);
    const {data, setData} = useContext(Data);
    

    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then(res => setCategoris(res.data))
            .catch(err => console.log(err))
    }, [])

    const selectCategory = (event) => {
        const value = event.target.value;
        axios.get(`https://dummyjson.com/products/category/${value}`)
            .then(res => setData(res.data.products))
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