import React from 'react';
import {FaSearch} from "react-icons/fa";

const SearchBar = () => {
    return (
        <form className='searchBar'>

            <input className='searchBar__input'
                   type='text'
                   placeholder='Recherche ...'
            />
            <button className='searchBar__btn'><FaSearch className='searchBar__icon'/></button>
        </form>
    );
};

export default SearchBar;
