import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import profilePic from '../../../assets/profilePic-test.jpg'
import {NavLink} from "react-router-dom";
import roof from '../../../assets/roofBlue.svg'

const Header = ({setFilter}) => {
    return (
        <header className='header__container'>
            <div className='header__container--side'>
                <NavLink to='/'>
                    <img className='roof' src={roof} alt='roof'/>
                    <Logo/>
                </NavLink>
            </div>
            <SearchBar setFilter={setFilter}/>
            <div className='header__container--side'>
                <section className='header__profile-container'>
                    <div className='profile__btn'>
                        <div className='notif-counter'>1</div>
                        <div className='profile__pic-container'>
                            <img className='profile-pic' src={profilePic} alt='Profile picture'/>
                        </div>
                        <GiHamburgerMenu/>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
