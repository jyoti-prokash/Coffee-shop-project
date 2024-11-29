import React from 'react';
import Banner from '../Components/Banner';
import Feature from '../Components/Feature';
import PopularProducts from '../Components/PopularProducts';
import { useLoaderData } from 'react-router-dom';
import FollowUS from '../Components/FollowUS';

const Home = () => {
    const coffee = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <PopularProducts coffee={coffee}></PopularProducts>
            <FollowUS></FollowUS>
        </div>
    );
};

export default Home;