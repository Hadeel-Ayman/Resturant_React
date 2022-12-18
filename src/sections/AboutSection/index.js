import React from 'react'
import './style.css'
import dish from '../../images/dish.png'
import Button from '../../component/Button/Button'
function AboutSection() {
  return (
    <section className='AboutContainer'>
      <div className='content'>
        <h5 className='AboutTitle'>About Us</h5>
        <h2 className='title'>Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine</h2>
        <p className='paragharh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
        <Button
          title={'Read more'}
          style={{ border: '2px solid #FFFCCC', width: '215px', height: '55px', backgroundColor: 'transparent', color: '#fff', fontSize: '18px', marginTop: '30px', cursor: 'pointer' }} />
      </div>
      <img src={dish} alt='' className='DishImg'/>
    </section>
  )
}

export default AboutSection