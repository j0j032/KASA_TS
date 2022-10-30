import React, {memo, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {useGetLodgings} from "../../../api/useGetLodgings";
import {useQueryClient} from "react-query";


const SearchBar = ({setFilter}) => {

    return (
        <form className='searchBar'>

            <input className='searchBar__input'
                   type='text'
                   placeholder='Recherche ...'
                   onChange={(e) => setFilter(e.target.value)}
            />
            <button className='searchBar__btn'><FaSearch className='searchBar__icon'/></button>
        </form>
    );
};

export default memo(SearchBar);
