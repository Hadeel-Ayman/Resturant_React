import React from 'react'
import './style.css'
const Card = (prpos) => {
  const { img, head, para } = prpos
  return (
    <div className='card'>
      <img src={img} alt='' className='icon'/>
      <h4 className='head'>{head}</h4>
      <p className='para'>{para}</p>
    </div>
  )
}

export default Card