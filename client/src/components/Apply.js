import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link,useHistory} from "react-router-dom";
import {toast} from "react-toastify";
import jwt_decode from "jwt-decode";


const Apply = () => {
   

    const [CV,setCV]=useState('');
    const [cover_letter,setCoverletter]=useState('');
    // const [rang,setRang]=useState(0);



    const [id,setId] =useState('');
 
    const [name, setName] = useState("");
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");

    const history = useHistory();

    
    const AddApplication = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/AddApplication', {
                CV : CV,
                cover_letter: cover_letter,
                rang:1
            });
            toast.success("Your application has been sent successfully");
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg);
            }
        }
    }
    useEffect(() => {
        refreshToken();
    }, []);
    


    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setId(decoded.userId)
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }


    return (  

        <div className="flex">
    <div className="scrollable-container flex w-2/5 md:w-1/4 h-screen bg-white">
        <div  className="mx-auto py-10 ">
            <ul>
                {console.log ( id )}
                <li 
                      className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] focus:text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    <Link className="font-semibold"  to="/dashboard">All offers</Link>
                </li>
                <Link to="/dashboardemp/Myoffers" className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] active:text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <Link className="font-semibold" to="/dashboard/MyApplications">My Applications</Link>
                </Link>
                <li className="flex space-x-2 mt-10 cursor-pointer text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>  
                    </svg>
                    <Link className="font-semibold" to="/dashboard/profile">Profile</Link>
                </li>
    
            </ul>
        </div>
      </div>
      <div className=" min-h-screen w-full bg-white">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
            <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Apply{" "}
                </h2>
                <p className="text-md md:text-xl">test </p>
              </div>
             
              <form onSubmit={AddApplication}>
                <div className="flex flex-col max-w-md space-y-5">

                  
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload CV</label>
<input  onChange={(e) => setCV(e.target.files[0])} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
</input>

<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Cover Letter </label>
<input onChange={(e) => setCoverletter(e.target.files[1])}class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">


               </input>
               
               <input
                    value="Apply"
                    type="submit"
                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"
                  />
                </div>
          
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
