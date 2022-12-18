import React from 'react'
import './style.css'
import { HeadTitle, Card } from '../../component/index'
import chef from '../../images/chef.png'
import restaurant from '../../images/restaurant.png'
import orangejuice from '../../images/orangejuice.png'
import SubheadTitle from '../../component/subHeadTitle/SubheadTitle'
const SpecialSection = () => {
  return (
    <section className='containerSpecial'>
      <div>
        <HeadTitle headTitle='Special' />
        <SubheadTitle SubheadTitle='What makes us special'/>
      </div>
      <div className='flex'>
        <Card img={orangejuice} head='Fresh food' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ' />
        <Card img={chef} head='skilled Chef' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ' />
        <Card img={restaurant} head='Exotic dishes' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ' />
      </div>
    </section>
  )
}

export default SpecialSection