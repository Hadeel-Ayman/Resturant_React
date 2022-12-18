import React from 'react'
import './style.css'
import Component from '../../images/Component.png'
import { Button } from '../../component'
const Discount = () => {
  return (
    <div className='discountDiv'>
      <div className='discountDiv5'>
        <img src={Component} alt='' className='imgs' />
        <div className='flexdiv'>
        <h2 className='txt'>Come join us for a lunch this weekend and enjoy</h2>
        <p className='off'>FLAT 10% OFF</p>
          <Button title='Book Table' style={{ border: '2px solid #FFFCCC', width: '173px', height: '55px', backgroundColor: 'transparent', color: '#fff', fontSize: '18px', marginTop: '30px', cursor: 'pointer' }} />
        </div>
        <img src={Component} alt='' className='imgs' />
      </div>
    </div>
  )
}

export default Discount