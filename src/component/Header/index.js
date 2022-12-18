import React from 'react'
import Logo from '../../images/Logo.png'
import './style.css'
import Vector from '../../images/Vector.png'
const Header = () => {
    return (
        <header>
            <img src={Logo} alt='' className='img' />
            <ul>
                <a href='#/'><li>Home</li></a>
                <a href='#/'><li>About Us</li></a>
                <a href='#/'><li>Special</li></a>
                <a href='#/'><li>Menu</li></a>
                <a href='#/'><li>Blogs</li></a>
                <a href='#/'><li><img src={Vector} alt='' /></li></a>
            </ul>
            <button className='bookBtn'>Book Now</button>
        </header>
    )
}

export default Header