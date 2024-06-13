import React from 'react';
import Slipper from './Slipper';
import Body from './Body';
import Filter from './Filter';

function Page() {
  return (
    <>
      <Slipper />
      <div className="container mx-auto px-4 flex flex-col justify-center items-center w-5/6">
        <Body />
        <Filter />
      </div>
    </>
  );
}

export default Page;
