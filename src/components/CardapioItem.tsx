import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className='flex'>
      <p className='text-left'>{item.name}</p>  
      <p className='text-right'>R${item.price}</p>
    </div>
  );
};

export default MenuItem;
