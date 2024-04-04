import React from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../_lib/services/auth.service';

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const loginRes = await login(data);

            console.log("loginRes ==> ", loginRes);
        } catch (error) {
            console.log("error ==> ", error);
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