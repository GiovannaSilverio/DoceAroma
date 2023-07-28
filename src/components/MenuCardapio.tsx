import React from 'react';
import MenuItem from './MenuCardapioItem';
import MenuCardapioData from './MenuCardapioData';

const Menu = () => {
  return (
    <div>
      <h2>Cardápio</h2>
      {MenuCardapioData.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
