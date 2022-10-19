import React from 'react';
import Header from "../../components/Header/Header";
import Filters from '../../components/Filters/Filters'
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
    return (
        <>
            <Header/>
            <Filters/>
            <main className='divide-content'>
                <Gallery/>
                <section></section>
            </main>
        </>
    );
};

export default Home;
