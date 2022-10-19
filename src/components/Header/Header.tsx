import React from 'react'
import {FaSearch, FaRegBell, FaChevronDown} from 'react-icons/fa'

const Header = () => {
    return (
        <header className='header__container'>
            <div>
                <FaSearch/>
                <FaRegBell/>
                <FaChevronDown/>
            </div>
        </header>
    )
}

export default Header
