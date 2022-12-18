import React from 'react'
import './style.css'
const Icon = (props)=> {
    const{img,num,desc}=props
  return (
    <div className='flexSec'>
        <img src={img} alt='' className='imgIcon'/>
        <div>
            <h2 className='num'>{num}</h2>
            <p className='desc'>{desc}</p>
        </div>
    </div>
  )
}

export default Icon