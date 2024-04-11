import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../_lib/services/auth.service';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (token) {
            navigate("products")
        }
    }, [])

    const onSubmit = async (data) => {
        try {
            const loginRes = await login(data);
            sessionStorage.setItem("token", loginRes.data.token);

            navigate("products")
        } catch (error) {
            alert("Invalid Credentials")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder='Enter your email'
                    {...register("username", {
                        required: {
                            value: true,
                            message: "Username is required"
                        }
                    })}
                /> <br />
                {(errors && errors.username) && <span>{errors.username.message}</span>}
                <input
                    type="password"
                    placeholder='Enter your password'
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required"
                        }
                    })}
                /> <br />
                {(errors && errors.password) && <span>{errors.password.message}</span>}
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}