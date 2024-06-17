import React from 'react';
import Slipper from './Slipper';
import Body from './Body';
import Filter from './Filter';
import Home from './Home';

function Page() {
  return (
    <>
      <div className="hidden md:block">
        <Slipper />
      </div>
      <div className='sm:hidden'>
        <Home/>
      </div>
      <div className="container mx-auto px-4 flex flex-col justify-center items-center w-full md:w-5/6   ">
      <div className='hidden md:block w-full'>
        <Body/>
      </div>
        
        <Filter />
      </div>
    </>
  );
}

export default Page;
