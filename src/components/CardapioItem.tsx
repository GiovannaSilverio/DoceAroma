import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className='flex sm:gap-y-1 sm:gap-x-10'>
      <p className='text-left w-full '>{item.name}</p>  
      <p className='text-rightw-full '>R${item.price}</p>
    </div>
  );
};

export default MenuItem;
