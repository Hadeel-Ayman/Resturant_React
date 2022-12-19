import React from 'react'
import './style.css'
import SocialIcons from '../../images/SocialIcons.png'
import SocialIcons1 from '../../images/SocialIcons1.png'
import SocialIcons2 from '../../images/SocialIcons2.png'
import Vector1 from '../../images/Vector-1.png'
import Vector2 from '../../images/Vector-2.png'
import Vector3 from '../../images/Vector3.png'
import Logo from '../../images/Logo.png'
const ContactItem = (props) => {
    const { title1, title2, title3 } = props
    return (
        <div className='gridDivs'>
            <div className='AllFlex'>
                <div className='dispalyFlex'>
                    <img src={Logo} alt='' className='imge' />
                    <h2 className='txtss'>{title1}</h2>
                </div>
                <p className='divP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                <div className='flexIcons'>
                    <img src={SocialIcons} alt='' className='iconss' />
                    <img src={SocialIcons1} alt='' className='iconss' />
                    <img src={SocialIcons2} alt='' className='iconss' />
                </div>
            </div>
            <div>
                <h2 className='txtss'>{title2}</h2>
                <ul className='menu'>
                    <li>Privecy Policy</li>
                    <li>Terms&conditions</li>
                    <li>Blogs</li>
                    <li>our Team</li>
                    <li>our Kitchen</li>
                </ul>
            </div>
            <div>
                <h2 className='txtss'>{title3}</h2>
                <ul className='menu menu2'>
                    <div className='ff'>
                        <img src={Vector3} alt='' className='imj' />
                        <li>Gogreendineservice@gmail.com</li>
                    </div>
                    <div className='ff'>
                        <img src={Vector1} alt='' className='imj' />
                        <li>AZ complex bylane3 Mandari Rd
                            Mumbai 1100867 </li>
                    </div>
                    <div className='ff'>
                        <img src={Vector2} alt='' className='imj' />
                        <li>+1800 287 256</li>
                    </div>

                </ul>
            </div>
        </div>
    )
}

export default ContactItem