import './play.css'
import React from 'react'
import playImg from '../../assets/img/play-img.jpg'

const Play = () => {
  return (
    <div className='full-width playCont'>
      <div className="blur"></div>
      <div className="text-center content">
        <h1>Juegos de PlayStation®5</h1>
        <p>
          Descubre qué juegos quieres, desde los éxitos de ventas más exclusivos hasta los indies más innovadores, todos ellos cobran vida con la potencia de la consola PS5™.
        </p>
        <div>
          <a href='#' className='btn'>Descubrelos</a>
        </div>
      </div>
    </div>
  )
}

export default Play