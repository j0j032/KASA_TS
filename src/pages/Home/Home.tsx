import React from 'react';
import Header from "../../components/Header/Header";
import Filters from '../../components/Filters/Filters'
import Gallery from "../../components/Gallery/Gallery";
import MainMap from "../../components/Map/MainMap";

const Home = () => {
    return (
        <>
            <Header/>
            <Filters/>
            <main className='divide-content'>
                <Gallery/>
                <MainMap/>
            </main>
        </>
    );
};

export default Home;
