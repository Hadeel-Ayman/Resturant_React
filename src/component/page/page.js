import React from 'react'
import Button from '../Button/Button';
import './style.css'
const Page = (props)=> {
    const { title, paragharh ,img} = props;
  return (
      <section className='Container2'>
          <div className='content2'>
              <h2 className='title'>{title}</h2>
              <p className='paragharh'>{paragharh}</p>
              <Button
                  title={'Read more'}
                  style={{ border: '2px solid #FFFCCC', width: '215px', height: '55px', backgroundColor: 'transparent', color: '#fff', fontSize: '18px', marginTop: '70px', cursor: 'pointer' }} />
          </div>
          <img src={img} alt='' className='DishImg' />
      </section>
  )
}

export default Page;