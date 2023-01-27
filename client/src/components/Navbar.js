import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import appLogo from "../img/appLogo.png";
import {toast} from 'react-toastify';

/* iseState variable as a parameter in order to store the user ID : */
const Navbar = ({userId, setUserId}) => {
    /* Here we make the useStates variables :  */
    const history = useHistory();
    const [navbar, setNavbar] = useState(false);
    const [userRole, setUserRole] = useState('Student');
    /*Employee*/

    /* Function of logout : */
    const Logout = async () => {
        if (window.confirm("Are you sure you want to Log out : ")) {
            try {
                await axios.delete('http://localhost:5000/logout');
                setUserId(null);
                history.push("/");
            } catch (error) {
                console.log(error);
            }
        }
    }

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            const decoded = jwt_decode(response.data.accessToken);
            setUserId(decoded.userId);
            setUserRole(decoded.role);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }


    useEffect(() => {
        refreshToken();
    }, [userId, userRole]);

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <img src={appLogo} style={{width: '65px', height: 'px'}} alt="logo"/>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">

                            {userId ? <li className="text-gray-600 hover:text-blue-600">
                                    <Link
                                        className="py-2 px-4  bg-orange-500 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                                        to="/dashboard">Home</Link>
                                </li> :
                                <li className="text-gray-600 hover:text-blue-600">
                                    <Link
                                        className="py-2 px-4  bg-orange-500 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                                        to="/">Home</Link>
                                </li>
                            }
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link
                                    className="py-2 px-4  bg-orange-500 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                                    to="/about-us">About US</Link>
                            </li>

                            {userId ? <li className="text-gray-600 hover:text-blue-600">
                                    <Link
                                        className="py-2 px-4  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                                        onClick={Logout}>Log out</Link>
                                </li> :
                                <li className="text-gray-600 hover:text-blue-600">
                                    <Link
                                        className="py-2 px-4  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                                        to="/login">Log in</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar