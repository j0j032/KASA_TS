import React, {memo, useRef, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {useQueryClient} from "react-query";


const SearchBar = ({setFilter}) => {
    const search = useRef()

    const handleChange = (e) => {
        e.preventDefault()
        setFilter(search.current.value)
    }
    return (
        <form onSubmit={handleChange} className='searchBar'>

            <input ref={search} className='searchBar__input'
                   type='text'
                   placeholder='Recherche ...'
            />
            <button className='searchBar__btn'><FaSearch className='searchBar__icon'/></button>
        </form>
    );
};

export default memo(SearchBar);
