import React from 'react'
import { useForm } from 'react-hook-form';

export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder='Enter your first name'
                    {...register("fName", {
                        required: {
                            value: true,
                            message: "First Name is required"
                        }
                    })}
                /> <br />
                {(errors && errors.fName) && <span>{errors.fName.message}</span>}
                <input
                    type="text"
                    placeholder='Enter your Last Name'
                    {...register("lName", {
                        required: {
                            value: true,
                            message: "Last Name is required"
                        }
                    })}
                /> <br />
                {(errors && errors.lName) && <span>{errors.lName.message}</span>}
                <input
                    type="number"
                    placeholder='Enter your contact number'
                    {...register("number", {
                        required: {
                            value: true,
                            message: "Contact Number is required"
                        }
                    })}
                /> <br />
                {(errors && errors.number) && <span>{errors.number.message}</span>}
                <button>
                    Signup
                </button>
            </form>
        </div>
    )
}