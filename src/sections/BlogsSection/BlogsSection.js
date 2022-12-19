import React from 'react'
import { CardBlogs, HeadTitle, SubheadTitle } from '../../component'
import './style.css'
import img10 from '../../images/img10.png'
import img11 from '../../images/img11.png'
import img12 from '../../images/img12.png'
const BlogsSection = () => {
    return (
        <div>
            <HeadTitle headTitle='Blogs' />
            <SubheadTitle SubheadTitle='words from our food lovers' />
            <div className='flexDDiv'>
                <CardBlogs img={img11}
                    describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '
                    Link='Read more'
                    foodName='Cooking Dining Experience' />
                <CardBlogs 
                    describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '
                    Link='Read more'
                    styless={{flexDirection:'column-reverse'}}
                    foodName='Cooking Dining Experience' 
                    img={img10}    
                    />
                <CardBlogs img={img12}
                    describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '
                    Link='Read more'
                    foodName='Cooking Dining Experience' />
            </div>

        </div>
    )
}

export default BlogsSection