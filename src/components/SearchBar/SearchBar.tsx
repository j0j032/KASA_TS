import React from 'react';
import {FaSearch} from "react-icons/fa";
import {IoSearchOutline} from "react-icons/all";

const SearchBar = () => {
    return (
        <section className='searchBar'>
            <IoSearchOutline className='searchBar__icon'/>
            <input className='searchBar__input'
                   type='text'
                   placeholder='Recherche ...'
            />
        </section>
    );
};

export default SearchBar;
