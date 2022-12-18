import React from 'react'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import { SubheadTitle, HeadTitle, MenuItems } from '../../component/index'
import './stayle.css'
const MenuSection = () => {
  return (
    <div className='divAll'>
      <HeadTitle headTitle='Straight From Kitchen' />
      <SubheadTitle SubheadTitle='Our Menu' />
      <div className='grid'>
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img1} subTit='Lorem ipsum dolor sit amet' number='Rs 222' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img2} subTit='Lorem ipsum dolor sit amet' number='Rs 590' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img3} subTit='Lorem ipsum dolor sit amet' number='Rs 130' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img4} subTit='Lorem ipsum dolor sit amet' number='Rs 135' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img5} subTit='Lorem ipsum dolor sit amet' number='Rs 135' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img1} subTit='Lorem ipsum dolor sit amet' number='Rs 135' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img2} subTit='Lorem ipsum dolor sit amet' number='Rs 222' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img1} subTit='Lorem ipsum dolor sit amet' number='Rs 590' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img3} subTit='Lorem ipsum dolor sit amet' number='Rs 130' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img5} subTit='Lorem ipsum dolor sit amet' number='Rs 135' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img1} subTit='Lorem ipsum dolor sit amet' number='Rs 135' />
        <MenuItems tit='Lorem ipsum dolor sit amet' img={img4} subTit='Lorem ipsum dolor sit amet' number='Rs 135' />
      </div>
    </div>
  )
}

export default MenuSection