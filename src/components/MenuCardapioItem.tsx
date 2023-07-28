import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Preço: R$ {item.price}</p>
    </div>
  );
};

export default MenuItem;
