import React from 'react';
import Banner from '../Banner/Banner';
import Location from '../Location/Location';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Banner />
            <Services/>
            <Location />
        </main>
    );
};

export default Home;