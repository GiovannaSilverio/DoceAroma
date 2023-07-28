import React from 'react';
import MenuItem from './CardapioItem';
import CarDataBebi from './CarDataBebi';
import CarDataDoce from './CarDataDoce';
import CarDataSalg from './CarDataSalg';

const CardapioD = () => {
  return (
    <>
    <div className='flex text-white bg-marromedio'>
    <div>
      <h2 className='text-bege text-lg'>Bebidas:</h2>
      {CarDataBebi.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
    <div className='justify-center items-center'>
        <h2 className='text-bege text-lg'>Doces:</h2>
        {CarDataDoce.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
   </div>      
   <div>
        <h2 className='text-bege text-lg'>Salgado:</h2>
        {CarDataSalg.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
   </div> 
   </div> 
      
      
    </>
  );
};

export default CardapioD;
