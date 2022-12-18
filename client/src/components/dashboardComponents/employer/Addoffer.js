import React, {useState} from 'react'
import axios from "axios";
import {Link,useHistory} from "react-router-dom";
import {toast} from "react-toastify";
import Dashboardemp from './dashboardemp';
const Addoffer = () => {
    const [titre, setTitre] = useState('');
    const [sector, setSector] = useState('IT');
    const [type, setType] = useState('PFE');
    const [paid, setPaid] = useState('');
    const [description, setDescription] = useState('');
    const [nbr_of_candidates, setNbrcand] = useState('');
    const [date_debut, setDatedebut] = useState('');
    const [date_fin, setDatefin] = useState('');
    const [state, setState] = useState('true');
    const history = useHistory();

    
    const Addoffer = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/Addoffer', {
                titre: titre,
                sector: sector,
                type: type,
                paid:paid,
                description:description,
                nbr_of_candidates: nbr_of_candidates,
                date_debut: date_debut,
                date_fin: date_fin,
                state: state
            });
            toast.success("Added successfully");
            history.push("/dashboardemp");
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg);
            }
        }
    }

    return (  

        <div className="flex">
    <div className="scrollable-container flex w-2/5 md:w-1/4 h-screen bg-white">
        <div  className="mx-auto py-10 ">
            <ul>
                <li 
                      className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] focus:text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    <Link className="font-semibold"  to="/dashboardemp">All Applications</Link>
                </li>
                <Link to="/dashboardemp/Myoffers" className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] active:text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <Link className="font-semibold" to="/dashboardemp/Myoffers">My Offers</Link>
                </Link>
                <li className="flex space-x-2 mt-10 cursor-pointer text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>  
                    </svg>
                    <Link className="font-semibold" to="/dashboardemp/Addoffer">Add offer</Link>
                </li>
    
            </ul>
        </div>
    </div>
    <div className=" min-h-screen w-full bg-white">
    <div className="flex flex-row w-full">
                <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                    <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                        <div className="flex flex-col space-y-2 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Add an offer </h2>
                            <p className="text-md md:text-xl">test </p>
                        </div>
                        <form onSubmit = {Addoffer} >
                            <div className="flex flex-col max-w-md space-y-5">
                                <input onChange={(e) => setTitre(e.target.value)} type="text" placeholder="Titre"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                       <select onChange={(e) => setSector(e.target.value)}
                                        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal">
                                    <option value="IT">IT</option>
                                    <option value="RH">RH</option>
                                    <option value="MARKETING">MARKETING</option>
                                </select>
                                <select onChange={(e) => setType(e.target.value)}
                                        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal">
                                    <option value="PFE">PFE</option>
                                    <option value="PFA">PFA</option>
                                    <option value="OBSERVATION">OBSERVATION</option>
                                 </select>
                                 <div className="flex w-max gap-4" onChange={(e) => setPaid(e.target.value)}>
                                    <p>Paid</p>
                                    <input type="radio" id="Yes" value="true"></input>
                                     
                                     <label for="Yes">Yes</label>
                                     <input type="radio" id="No" value="false"></input>
                                    
                                        <label for="No">No</label>
                                   </div>
                                 <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setNbrcand(e.target.value)} type="number"
                                       placeholder="number"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setDatedebut(e.target.value)} type="date"
                                     
                                      
                                       min="2018-01-01" max="2023-12-31"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                <input onChange={(e) => setDatefin(e.target.value)} type="date"
                                        
                                       
                                       min="2018-01-01" max="2023-12-31"
                                       className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"/>
                                
                                <input value="Add Offer" type="submit"
                                       className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"/>

                            </div>
                        </form>
                    </div>
               </div>
             </div>
         </div>
    </div>
    
       
     
    )
}

export default Addoffer