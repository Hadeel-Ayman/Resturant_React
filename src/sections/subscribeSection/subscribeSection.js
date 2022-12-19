import React from 'react'
import './style.css'
import mail from '../../images/mail.png'
import Button from '../../component/Button/Button'
import Input from '../../component/Input/Input'
const SubscribeSection = () => {
    return (
        <div className='divFlexInput'>
            <div className='mailFlex'>
                <img src={mail} alt='' />
                <h2 className='Subscribe'>Subscribe to our Newsletter</h2>
            </div>
            <Input />
            <Button
                title={'Subscribe'}
                style={{ border: '2px solid #FFFCCC', width: '207px', height: '55px', backgroundColor: 'transparent', color: '#fff', fontSize: '18px', cursor: 'pointer' }} />
        </div>
    )
}

export default SubscribeSection