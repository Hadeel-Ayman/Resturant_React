import React from 'react'
import './style.css'
const MenuItems = (props) => {
    const { img, tit, subTit, number } = props
    return (
        <div className='flexDiv'>
            <img src={img} alt='' className='imgItem' />
            <div className='divText'>
                <h5 className='text'>{tit}</h5>
                <h6 className='text2'>{subTit}</h6>
            </div>
            <p className='number'>{number}</p>
        </div>
    )
}

export default MenuItems