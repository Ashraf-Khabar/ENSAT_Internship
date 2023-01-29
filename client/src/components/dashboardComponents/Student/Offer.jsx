import React, {useState, useEffect, useContext} from "react";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, useHistory, useParams } from "react-router-dom";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import Moment from "moment";


const Offer = (setOfferId) => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const history = useHistory();
  const [offer, setOffer] = useState([]);
  const { id } = useParams();// this function get the offer's id from url

  setOfferId(id);
  // calls an api to get the information of the offer + employer using its id

  const getOffer = () => {
    Axios.post("http://localhost:5000/offer", {
      id: id,
    }).then((response) => {
      setOffer(response.data);
    });
  };

  useEffect(() => {
    refreshToken();
    getOffer();
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

  return (
    <div className="flex ">
      {
        //Console log for tests
      }
      {console.log(offer)}

      {console.log(offer.Employer)}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <Link className="font-semibold" to="/dashboard">
                Home
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span className="font-semibold">My Applications</span>
            </li>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <Link className="font-semibold" to="/dashboard/profile">
                Profile
              </Link>
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
        <div className=" overflow-y: scroll items-center justify-center ml-10 mr-10 mt-5  bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="container w-full md:max-w-3xl mx-auto pt-2">
            <div className="w-full px-4 md:px-2 text-xl text-gray-800 leading-normal">
              {offer.map((offer, key) => (
                <div>
                  <div className="text-center">
                    <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-xl md:text-4xl">
                      {offer.titre}
                    </h1>
                    <div className="font-sans">
                      <p className="text-sm md:text-base font-normal text-gray-600">
                        Published{" "}
                        {Moment(offer.date_debut).format("MMM Do YYYY")}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="py-8 px-10 ml-5 text-base	text-justify">
                      {offer.description}
                    </p>
                    <div className="ml-20 pl-20 pb-8 text-start grid  grid-rows-5 grid-flow-col text-base font-sans ">
                      <div className="font-bold	text-lg	">
                        Internship Informations :
                      </div>
                      <div className="font-semibold">Type : {offer.type}</div>
                      <div className="font-semibold">
                        Paid : {offer.paid ? "Yes" : "No"}
                      </div>
                      <div className="font-semibold">
                        Candidats : {offer.nbr_of_candidates}
                      </div>
                      <div className="font-semibold">
                        Deadline :{" "}
                        {Moment(offer.date_fin).format("MMM Do YYYY")}
                      </div>
                      <div className="font-bold text-lg	">
                        Company Informations :
                      </div>

                      <div className="font-semibold">
                        Denomination : {offer.Employer.denomination}
                      </div>
                      <div className="font-semibold">
                        City : {offer.Employer.city}{" "}
                      </div>
                      <div className="font-semibold">
                        Sector : {offer.Employer.industry}
                      </div>
                      <div className="font-semibold">
                        Number of Employees : {offer.Employer.nbr_employees}
                      </div>
                    </div>
                    <div className="flex flex-col items-center py-5">
                      <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to={{pathname :"/dashboard/apply/"+offer.id}}>
                        Apply For the Internship
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
