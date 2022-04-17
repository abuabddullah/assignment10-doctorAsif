import React from 'react';
import Banner from '../Banner/Banner';
import Expertise from '../Expertise/Expertise';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Banner />
            <Services/>
            <Expertise/>
        </main>
    );
};

export default Home;