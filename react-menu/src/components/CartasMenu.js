import React from 'react'
import CartaMenu from './CartaMenu'
import imagen1 from '../imagenes/images.jpeg'
import imagen2 from '../imagenes/enchiladas.jpg'
import imagen3 from '../imagenes/mole.jpg'
import imagen4 from '../imagenes/quesabirria.jpg'
import imagen5 from '../imagenes/tacos.jpeg'
import imagen6 from '../imagenes/chilaquiles.jpg'



const recetas = [
    {
        id: 1,
        nombre: 'Chiles en nogada',
        descripcion: 'Chiles en Nogada rellenas con carne de res',
        imagen: imagen1
    },
    {
        id: 2,
        nombre: 'Enchiladas',
        descripcion: 'Enchiladas con pollo bañadas en salsa roja',
        imagen: imagen2
    },
    {
        id: 3,
        nombre: 'Mole',
        descripcion: 'Mole con pollo y queso rayado.',
        imagen: imagen3
    },
    {
        id: 4,
        nombre: 'Quesabirria',
        descripcion: 'Quesadillas con birria.',
        imagen: imagen4
    },
    {
        id: 5,
        nombre: 'Tacos',
        descripcion: 'Tacos con tortilla de maiz',
        imagen: imagen5
    },
    {
        id: 6,
        nombre: 'Chilaquiles',
        descripcion: 'Chilaquiles con pollo en salsa roja',
        imagen: imagen6
    }
]
function CartasMenu() {
  return (
    <div className='container'>
         <div className="barra-busqueda">
        <div className="barra busqueda d-flex">
          <input
            type="text"
            placeholder="Buscar recetas..."
            className="form-control mr-2"
          />
          <button type="button" className="btn btn-primary">Buscar</button>
        </div>
      </div>
        <div className='row'>
            {
                recetas.map(e => (
                    <div className='col-md-4' key={e.id}>
                        <CartaMenu nombre={e.nombre} imagen={e.imagen} descripcion={e.descripcion}/>
                    </div>
                    
                    
                ))

            }
            
        </div>
    </div>
  )
}

export default CartasMenu
