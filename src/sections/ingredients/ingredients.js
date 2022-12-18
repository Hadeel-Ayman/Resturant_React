import React from 'react'
import { HeadTitle, Page } from '../../component';
import Rectangle from '../../images/Rectangle.png'
import './style.css'
const Ingredients = () => {
    return (
        <section className='Container2'>
            <HeadTitle headTitle={`Cooking ingredients`}  style={{width: '190px',
                height: '120px', transform: `translateX(150%)`, textAlign:'left'}}/>
            <Page title='What goes in' img={Rectangle} paragharh='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.'/>
        </section>
    )
}

export default Ingredients;