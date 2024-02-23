import React from 'react'
import CartasMenu from './components/CartasMenu'
import './App.css'
import imagenLogo from './imagenes/uabcs.png'
function App() {
  return (
    <div className='App'>
       <div><div className="col text-center">
        <h1 style={{ color: 'white' }}>Recetas</h1>
        </div>
      </div>
      <div className="imagen">
        <img src={imagenLogo} alt="Logo" className="logo" />
        
      </div>
      <CartasMenu/>
    </div>
  )
}

export default App

