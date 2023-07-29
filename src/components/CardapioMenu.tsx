import React from 'react';
import MenuItem from './CardapioItem';
import CarDataBebi from './CarDataBebi';
import CarDataDoce from './CarDataDoce';
import CarDataSalg from './CarDataSalg';

const CardapioD = () => {
  return (
    <>
    <div className='flex text-white sm:flex-row bg-marromedio justify-between mx-8 items-center gap-x-32'>
    <div>
      <h2 className='text-bege sm:flex-row text-lg text-left'>Bebidas:</h2>
      {CarDataBebi.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
    <div>
        <h2 className='text-bege sm:flex-row text-lg text-center'>Doces:</h2>
        {CarDataDoce.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
   </div>      
   <div>
        <h2 className='text-bege text-lg w-full text-right'>Salgados:</h2>
        {CarDataSalg.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
   </div> 
   </div> 
      
      
    </>
  );
};

export default CardapioD;
