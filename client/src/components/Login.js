import React, { useState } from 'react'
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import {toast} from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            toast.success("Logged in successfully");
            history.push("/dashboard");
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
                <div
                    className='hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
                    <div className="flex items-center justify-start space-x-3">
                        <span className="bg-black rounded-full w-8 h-8"></span>
                        <Link to="/" className="font-medium text-xl">Brand</Link>
                    </div>
                    <div className='space-y-5'>
                        <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Enter your account and
                            discover new
                            experiences</h1>
                        <p className="text-lg">You do not have an account?</p>
                        <button>
                            <Link to="/register"
                                  className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                                Create account here
                            </Link>
                        </button>
                    </div>
                    <p className="font-medium">© 2022 Company</p>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                    <div className="flex lg:hidden justify-between items-center w-full py-4">
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black rounded-full w-6 h-6"></span>
                            <a href="client/src/components/Login#" className="font-medium text-lg">Brand</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Not a member? </span>
                            <a href="client/src/components/Login#"
                               className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                                Sign up now
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                        <div className="flex flex-col space-y-2 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
                            <p className="text-md md:text-xl">Sign up or log in to place the order,no password
                                require!</p>
                        </div>
                        <form onSubmit={Auth}>
                            <div className="flex flex-col max-w-md space-y-5">
                                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input type="submit" value="Login"
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
                                    <span>Login using Gmail</span>

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

export default Login