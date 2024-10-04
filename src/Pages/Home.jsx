import React from 'react';

import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Bio from '../components/Bio';
import Catering from '../components/Catering';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <Categories />
      <Featured />
      <Bio />
      <Catering />
    </div>
  );
}

export default Home;
