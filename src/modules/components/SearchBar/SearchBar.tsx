import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {useGetLodgings} from "../../../api/useGetLodgings";
import {useQueryClient} from "react-query";

const isIncluded = (value1, value2) => value1.toLowerCase().includes(value2.toLowerCase())
const SearchBar = () => {
    const queryClient = useQueryClient()
    const [filter, setfilter] = useState('')
    const {data} = useGetLodgings((data) => data.filter(item => isIncluded(item.title, filter)))
    
    console.log(data)
    return (
        <form className='searchBar'>

            <input className='searchBar__input'
                   type='text'
                   placeholder='Recherche ...'
                   onChange={(e) => setfilter(e.target.value)}
            />
            <button className='searchBar__btn'><FaSearch className='searchBar__icon'/></button>
        </form>
    );
};

export default SearchBar;
