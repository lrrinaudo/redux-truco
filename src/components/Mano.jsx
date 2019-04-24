import React from 'react'
import Carta from './Carta.jsx'
import CartaJugada from './CartaJugada.jsx'
import './Mano.css'
import CartaOponente from './CartaOponente.jsx'

export default function Mano({ cartas, seleccionable, oponente }) {
  const crearCarta = oponente ?
       carta => <CartaOponente jugada={carta.jugada}/>
       : carta => carta.jugada ? 
           <CartaJugada /> : <Carta carta={carta} seleccionable />

  return (
    <div className="mano">
       {cartas.map(crearCarta)}
    </div>
  )
}