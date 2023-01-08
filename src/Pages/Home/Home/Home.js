import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Categories from '../Categories/Categories';
import LastBanner from '../LastBanner/LastBanner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Brand></Brand>
          <Categories></Categories>
          <LastBanner></LastBanner>
        </div>
    );
};

export default Home;