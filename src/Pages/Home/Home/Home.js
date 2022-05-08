import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Others from '../Others/Others';
import Services from '../Services/Services';
import Parts from '../Parts/Parts';


const Home = () => {

    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Parts></Parts>
            <Others></Others>
        </>
    );
};

export default Home;