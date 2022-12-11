import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import appLogo from "../img/appLogo.png";
import { toast } from 'react-toastify';

const Navbar = ({userId, setUserId}) => {
    const history = useHistory();

    const [navbar, setNavbar] = useState(false);
    const Logout = async () => {
        if(window.confirm("Are you sure you want to Log out : ")){
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
            console.log();
            const decoded = jwt_decode(response.data.accessToken);
            console.log(decoded);
            setUserId(decoded.userId);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }

    useEffect( () => {
        console.log(userId);
    }, [userId])

    useEffect(() => {
        refreshToken();
    }, [userId]);
    
    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <img src={appLogo} style={{ width: '65px', height: 'px' }}  alt="logo"/>
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
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link className="w-full mt-15 bg-[#EC5252] hover:bg-[#1C7DB8] active:bg-blue-800 rounded-full py-1 px-2 text-white" to="/">Home</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link className="w-full mt-15 bg-[#EC5252] hover:bg-[#1C7DB8] active:bg-blue-800 rounded-full py-1 px-2 text-white" to="/" to="/stages">Stages</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link className="w-full mt-15 bg-[#EC5252] hover:bg-[#1C7DB8] active:bg-blue-800 rounded-full py-1 px-2 text-white" to="/" to="/about-us">About US</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link className="w-full mt-15 bg-[#EC5252] hover:bg-[#1C7DB8] active:bg-blue-800 rounded-full py-1 px-2 text-white" to="/" to="contact-us">Contact US</Link>
                            </li>
                            { userId && <li className="text-gray-600 hover:text-blue-600">
                                    <Link className="w-full mt-15 bg-[#EC5252] hover:bg-[#1C7DB8] active:bg-blue-800 rounded-full py-1 px-2 text-white" to="/" to="/dashboard">Dashboard</Link>
                                </li>
                            }
                            { userId ? <li className="text-gray-600 hover:text-blue-600">
                                <button className="w-full mt-15 hover:text-[#CA7918] rounded-full py-1 px-2 text-[#1C7DB8]" to="/" onClick={Logout} >Log out</button>
                            </li> :
                            <li className="text-gray-600 hover:text-blue-600">
                                    <Link className="w-full mt-15 bg-[#EC5252] hover:bg-blue-700 active:bg-blue-800 rounded-full py-1 px-2 text-white" to="/" to="/login" >Log in</Link>
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