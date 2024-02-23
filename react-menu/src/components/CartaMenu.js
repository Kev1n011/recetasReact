import React from 'react'
import './CartasMenu.css'; 

function CartaMenu({ nombre, imagen, descripcion }) {
  return (
    <div className='carta-menu'>
      <div className='card text-center'>
        <img src={imagen} alt={nombre} className='card-img' /> {/* Agrega la clase 'card-img' a la imagen */}
        <div className='card-body'>
          <h4 className='card-title'>{nombre}</h4>
          <p className='card-text'>{descripcion}</p>
          <a className="btn btn-primary" href="#" role="button">Ver receta</a>
        </div>
      </div>
    </div>
  );
}
export default CartaMenu
