import React, {useState} from 'react'
import axios from "axios";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";

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
        <div className="flex min-h-screen">
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
     
    )
}

export default Addoffer
