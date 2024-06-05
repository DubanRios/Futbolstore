import React from 'react';
import './itemlistcontainer.css';

const ItemListContainer = ({ items }) => {
  return (
    <div className="item-list-container">
      {items.map((item, index) => (
        <div key={index} className="item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
