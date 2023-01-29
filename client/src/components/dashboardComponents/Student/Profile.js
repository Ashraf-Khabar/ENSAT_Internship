import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const history = useHistory();
  const [student, setStudent] = useState([]);
  let id;

  useEffect(() => {
    refreshToken();
  }, []);

  const getStudent = () => {
    axios
      .post("http://localhost:5000/student", {
        id: id,
      })
      .then((response) => {
        setStudent(response.data);
      });
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      id = decoded.userId;
      setEmail(decoded.email);
      setExpire(decoded.exp);
      getStudent();
    } catch (error) {
      if (error.response) {
        history.push("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div className="flex">
      <div className="flex w-2/5 md:w-1/4 h-screen bg-white">
        <div className="mx-auto py-10">
          <ul>
            <li
              to="/dashboard"
              className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] active:text-[#EC5252] duration-150"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <Link className="font-semibold" to="/dashboard/MyApplications">
                My Applications
              </Link>
            </li>
            <li
              to="/dashboard/profile"
              className="flex space-x-2 mt-10 cursor-pointer text-[#EC5252] duration-150"
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
        <div class="w-full md:w-9/12 mx-2 h-64">
          <div class="bg-white p-3 shadow-sm rounded-sm">
            {console.log(student)}
            <div className="relative">
              <img
                className="float-right rounded-lg"
                style={{
                  margin: "10px",
                  width: "170px",
                  height: "190px",
                  padding: "10px",
                  marginTop: "10px",
                }}
                src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
                alt="Elon Musk"
              />
              <button className="absolute right-4 top-48  inline-flex items-center justify-center font-bold overflow-hidden group rounded-md p-2  bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 m-2">
              <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>

              <span class="relative text-white">Changer l'image</span>

                
              </button>
              
            </div>
            <div class="text-gray-700 pt-10">
              <div class="grid md:row-span-2 text-base">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Full Name</div>
                  <div class="px-4 py-2">{student.name}</div>
                </div>

                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">CIN</div>
                  <div class="px-4 py-2">{student.CIN}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Code Apogee</div>
                  <div class="px-4 py-2">{student.code_apogee}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Branch</div>
                  <div class="px-4 py-2">{student.branch}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">{student.phone}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Current Address</div>
                  <div class="px-4 py-2">{student.address}</div>
                </div>

                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email</div>
                  <div class="px-4 py-2">{email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
