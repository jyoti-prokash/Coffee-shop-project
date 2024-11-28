import React from 'react';
import Banner from '../Components/Banner';
import Feature from '../Components/Feature';
import PopularProducts from '../Components/PopularProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;