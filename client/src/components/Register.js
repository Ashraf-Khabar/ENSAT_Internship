import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import {toast} from "react-toastify";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const history = useHistory();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            toast.success("Register successful");
            history.push("/login");
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg);
            }
        }
    }

    return (
        <body className="bg-white">
        <div className="flex min-h-screen">
            <div className="flex flex-row w-full">
                <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                    <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                        <div className="flex flex-col space-y-2 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Create an account</h2>
                            <p className="text-md md:text-xl">Sign up or log in to place the order,no password
                                require!</p>
                        </div>
                        <form onSubmit={Register}>
                            <div className="flex flex-col max-w-md space-y-5">
                                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setConfPassword(e.target.value)} type="password" placeholder="Repeat password"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input value="Register" type="submit"
                                       className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"/>

                                <div className="flex justify-center items-center">
                                    <span className="w-full border border-black"></span>
                                    <span className="px-4">Or</span>
                                    <span className="w-full border border-black"></span>
                                </div>
                                <button
                                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
              <span className="absolute left-4">
              </span>
                                    <span>Sign up with Google</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}

export default Register