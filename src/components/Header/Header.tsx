import React from 'react'
import {FaSearch, FaRegBell, FaChevronDown} from 'react-icons/fa'
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
    return (
        <header className='header__container'>
            <div className='header__container--side'>
                <Logo/>
                <SearchBar/>
            </div>
            <div className='header__container--side'>
                <button className='btn btn--black'>Proposer mon appartement</button>
                <section className='header__profile-container'>
                    <div className='header__notification'>
                        <FaRegBell className='notif-icon'/>
                        <div className='notif-counter'>1</div>
                    </div>
                    <div className='profile__btn'>
                        <div className='profile__pic-container'>
                            <img className='profile-pic' src='src/assets/profilePic-test.jpg' alt='Profile picture'/>
                        </div>
                        <FaChevronDown/>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
