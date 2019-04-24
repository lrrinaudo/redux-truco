import React from 'react'

import './Carta.css'

export default function Carta({ carta }) {
  return (
    <div className="carta">
      {carta.numero}
      {carta.palo}
    </div>
  )
}