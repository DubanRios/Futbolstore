import React from 'react';
import './menu.css';
import ItemListContainer from './itemlistcontainer';

const menu = () => {
  const items = ['Espinelleras', 'Balón de fútbol', 'Zapatillas de fútbol', 'Camiseta de fútbol'];

  return (
    <div className="container">
      <h1>FUTBOLSTORE</h1>
      <div className="menu">
        <p>INICIO</p>
        <p>ROPA</p>
        <p>CONTACTO</p>
      </div>
      <ItemListContainer items={items} />
    </div>
  );
};

export default menu;