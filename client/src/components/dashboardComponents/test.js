import {Link} from "react-router-dom";
import React from "react";

<ul>
    <li
        className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] focus:text-[#EC5252] duration-150">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <Link className="font-semibold" to="/dashboardemp">All Applications</Link>
    </li>
    <Link to="/dashboardemp/Myoffers"
          className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] active:text-[#EC5252] duration-150">
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


<form onSubmit={Addoffer}>
    <div className="flex flex-col max-w-md space-y-5">
        <input
            onChange={(e) => setTitre(e.target.value)}
            type="text"
            placeholder="Titre"
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <select
            onChange={(e) => setSector(e.target.value)}
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        >
            <option value="IT">IT</option>
            <option value="RH">RH</option>
            <option value="MARKETING">MARKETING</option>
        </select>
        <select
            onChange={(e) => setType(e.target.value)}
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        >
            <option value="PFE">PFE</option>
            <option value="PFA">PFA</option>
            <option value="OBSERVATION">OBSERVATION</option>
        </select>
        <div
            className="flex w-max gap-4"
            onChange={(e) => setPaid(e.target.value)}
        >
            <p className="flex items-center">Paid</p>
            <div className="flex items-center">
                <input
                    type="radio"
                    value="1"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                </label>
            </div>
            <div className="flex items-center">
                <input
                    checked
                    type="radio"
                    value="0"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    No
                </label>
            </div>
        </div>
        <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <input
            onChange={(e) => setNbrcand(e.target.value)}
            type="number"
            placeholder="number"
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <input
            onChange={(e) => setDatedebut(e.target.value)}
            type="date"
            min="2018-01-01"
            max="2023-12-31"
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <input
            onChange={(e) => setDatefin(e.target.value)}
            type="date"
            min="2018-01-01"
            max="2023-12-31"
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />

        <input
            value="Add Offer"
            type="submit"
            className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"
        />
    </div>
</form>