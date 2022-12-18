/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, useHistory } from "react-router-dom";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import Moment from 'moment';


const Offers = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const [active, setActive] = useState(false);

  const [offersList, setOffersList] = useState([]);
  const formatDate_fin = Moment(offersList.date_fin).format("MMM Do YYYY"); // change the date format to jan 1th 2022



  //appel de api to get all offers and their employers
  const getOffers = () => {
    Axios.get("http://localhost:5000/offers").then((response) => {
      setOffersList(response.data);
    });
  };

  useEffect(() => {
    getOffers();
  }, []);

  
  // add getoffers to useeffect to display automatically the list without button....
  useEffect(() => {
    refreshToken();
    getUsers();
    getOffers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        history.push("/");
      }
    }
  };

  const axiosJWT = Axios.create();
  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  return (
    <div className="flex ">
      {console.log(offersList)}
      <div className="scrollable-container flex w-2/5 md:w-1/4 h-screen bg-white">
        <div className="mx-auto py-10">
          <ul>
            <li className="flex space-x-2 mt-10 cursor-pointer text-[#EC5252] focus:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <Link className="font-semibold" to="/dashboard">
                Home
              </Link>
            </li>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] active:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <Link className="font-semibold" to="/dashboard/offers">
                All Offers
              </Link>
            </li>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span className="font-semibold">My Course</span>
            </li>
            <Link
              to="/dashboard/profile"
              className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <Link className="font-semibold" to="/dashboard/profile">
                Profile
              </Link>
            </Link>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span className="font-semibold">Setthing</span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" min-h-screen w-full">
        <div className="w-full ">
          <nav className="flex justify-between px-1 bg-white py-1">
            <div className="flex items-center">
              <img
                style={{ margin: "10px", width: "45px", height: "px" }}
                className="w-8 rounded-full"
                src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
                alt="Elon Musk"
              />
              <p>{name}</p>
            </div>
          </nav>
        </div>
        <div className="overflow-y: scroll items-center justify-center ml-10 mr-10 mt-5  bg-white rounded-lg shadow dark:bg-gray-800">

          <ul className="flex flex-col mb-2 divide-y divide">
          {offersList.map((offer,key) => (
            // looping/Maping through every item in the list of offers
            //the link below allow to get redirected to the offer page throught a click on its row
            <Link className="flex flex-row   hover:bg-indigo-200" to={{pathname :"/dashboard/offer/"+offer.id}}>
              <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                  <a href="#" className="relative block"></a>
                </div>
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium dark:text-white" > {offer.titre}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-200" >
                 {offer.denomination}
      
                  </div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-200">
                {  formatDate_fin}
                </div>
              </div>
            </Link>
           
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offers;
