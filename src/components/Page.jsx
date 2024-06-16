import React from 'react';
import Slipper from './Slipper';
import Body from './Body';
import Filter from './Filter';

function Page() {
  return (
    <>
      <div className="hidden md:block">
        <Slipper />
      </div>
      <div className="container mx-auto px-4 flex flex-col justify-center items-center w-full md:w-5/6 sm:px-2">
        <Body />
        <Filter />
      </div>
    </>
  );
}

export default Page;
