import React, { useState } from 'react';
import './Cuadrado.css';

const Cuadrado = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="contenedor">
      <div className="decorativo detrás"></div>
      <div className={`cuadrado ${clicked ? 'activo' : ''}`} onClick={handleClick}></div>
      <div className="decorativo delante"></div>
    </div>
  );
};

export default Cuadrado;
