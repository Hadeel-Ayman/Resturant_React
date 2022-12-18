import React from 'react';
import { Header, Title } from '../../component';
import './style.css'
const HomeSection = () => {
    return (
        <section className='Homecontainer'>
            <div className='divOpacity'>
                <Header />
                <Title title={`Welcome To \n Golden View Dine`} style={{ color: '#fff', whiteSpace: 'pre-line' }} paragrph='Explore the authentic vegan dishes with your friends and family' />
            </div>
        </section>
    )
}

export default HomeSection