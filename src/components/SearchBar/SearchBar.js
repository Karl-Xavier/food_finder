import React, { useState } from 'react';
import './SearchBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MagnifyingGlass } from 'phosphor-react'

const SearchBar = (props) => {
    const [query, setQuery] = useState('');
    const apiKey = "4a611089e80c42d697a66db9617b8988";

    const handleSearch = async () => {
        const apiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;
        try {
            const response = await fetch(apiURL, {

                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                },

            });

            const data = await response.json();

            props.onSearch(data)

        } catch (error) {

            console.log("Error Fetching Data...", error);
            
        }

    };

    return (
        <div className='searchbar container'>
            <input
                type='text'
                value={query}
                onChange={(e) => { setQuery(e.target.value) }}
                placeholder='Search Food'
            />
            <MagnifyingGlass size={40} role='button' onClick={handleSearch}/>
        </div>
    );
};

export default SearchBar;