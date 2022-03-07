import React from 'react'
import imgSlider from '../../assets/img/imgSlider.jpg'
import './hero.css'

const Hero = (props) => {
  return (
    <div className='heroContainer'>
      <img src={imgSlider} />
      <div className='heroInfo'>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <a className='btn' href='/tienda'>Ver Productos</a>
      </div>
    </div>
  )
}

export default Hero