import React from 'react'
import './style.css'
import stars from '../../images/stars.png'
const IconReviewes = (props) => {
  const { img, name, paragr } = props;
  return (
    <div>
      <div className='flexDivs'>
      <img src={img} alt='' className='avatarImg' />
      <div>
        <h4 className='name'>{name}</h4>
        <img src={stars} alt=''/>
      </div>
      </div>
      <p className='pargr'>{paragr}</p>
    </div>
  )
}

export default IconReviewes