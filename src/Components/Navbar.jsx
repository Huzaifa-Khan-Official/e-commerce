import React, { useContext, useEffect, useState, useTransition } from 'react'
import { Data } from '../Context/Context';
import { axiosHandler } from '../_lib/axiosHandler';

export default function Navbar() {
    const [categories, setCategoris] = useState([]);
    const { data, setData } = useContext(Data);
    const [isPending, startTransition] = useTransition()
    const [value, setValue] = useState("");

    useEffect(() => {
        axiosHandler.get("products/categories")
            .then(res => setCategoris(res.data))
            .catch(err => console.log(err))
    }, [])

    const selectCategory = (event) => {
        const value = event.target.value;
        axiosHandler.get(`products/category/${value}`)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
    }

    const handleChange = (event) => {
        const inputvalue = event.target.value
        inputvalue == "" ? axiosHandler.get("products")
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
            :
            setValue()
        startTransition(() => {
            axiosHandler.get(`products/search?q=${inputvalue}`)
                .then(res => setData(res.data.products))
                .catch(err => console.log(err))
        });
    };

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

            <div className="searchDiv">
                <input type="text" className='form-control mt-4' value={value} onChange={handleChange} />
                {isPending && <p>Loading...</p>}
            </div>
        </div>
    )
}