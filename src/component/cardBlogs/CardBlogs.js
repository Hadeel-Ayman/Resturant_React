import React from 'react'
import './style.css'
const CardBlogs = (props) => {
    const { img, foodName, describe, Link, styless } = props
    return (
        <div className='AllDiv'>
            <img src={img} alt='' className='foodImg' style={styless}/>
            <h4 className='foodname'>{foodName}</h4>
            <p className='par'>{describe}</p>
            <h6 className='link'>{Link}</h6>
        </div>
    )
}

export default CardBlogs