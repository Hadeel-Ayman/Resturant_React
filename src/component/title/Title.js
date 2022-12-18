import React from 'react'
import Button from '../Button/Button';
import './style.css'
const Title = (props) => {
  const { title, paragrph, style } = props;
  return (
    <div className='conatiner'>
      <h3 style={style}>{title}</h3>
      <p style={style}>{paragrph}</p>
      <Button
        title={'Read more'}
        style={{ border: '2px solid #FFFCCC', width: '215px', height: '55px', backgroundColor: 'transparent', color: '#fff', fontSize: '18px',marginTop:'30px',cursor:'pointer' }} />
    </div>
  )
}

export default Title