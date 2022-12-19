import React, {useState, useContext, createContext, useEffect} from 'react'
import axios from "axios";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";

// export const userId = createContext() ;

const Register = ({setId}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');


    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // const getUserByEmail = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.get('http://localhost:5000/user');
    //         setId(response.data[0].id);
    //         console.log(Id);
    //     } catch (err) {
    //         console.log(`error from function getUserByEmail : ${err}`);
    //     }
    // }

    const Register = async (e) => {
        setIsPending(true);
        e.preventDefault();
        // history.push('/RegisterEmployee')
        try {
            const user = await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: 'Employee'
            });
            setId(user.data.id);
            console.log(user.data.id);
            toast.success("Register successful");
            history.push('/registerEmployee');
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg);
            }
        }
        setIsPending(false); // Set isPending to false when the data has finished being fetched
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
                        {isPending &&
                            <center role="status">
                                <svg aria-hidden="true"
                                     className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </center>
                        }
                        <form onSubmit={Register}>
                            <div className="flex flex-col max-w-md space-y-5">
                                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setPassword(e.target.value)} type="password"
                                       placeholder="Password"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setConfPassword(e.target.value)} type="password"
                                       placeholder="Repeat password"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input value="Next" type="submit"
                                       className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"/>

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