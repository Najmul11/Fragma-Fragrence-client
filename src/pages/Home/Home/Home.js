import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Expertise from '../Expertise/Expertise';
import Faq from '../Faq/Faq';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Expertise></Expertise>
            <Faq></Faq>
        </div>
    );
};

export default Home;