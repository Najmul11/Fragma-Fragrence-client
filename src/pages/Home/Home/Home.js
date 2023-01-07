import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Expertise from '../Expertise/Expertise';
import Faq from '../Faq/Faq';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedProducts></AdvertisedProducts>
            <Expertise></Expertise>
            <Faq></Faq>
        </div>
    );
};

export default Home;