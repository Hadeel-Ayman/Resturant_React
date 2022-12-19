import React from 'react'
import { HeadTitle, SubheadTitle, IconReviewes } from '../../component';
import Ellipse from '../../images/Ellipse.png'
import './style.css'
const ReviewsSection = () => {
    return (
        <div>
            <HeadTitle headTitle='Reviews' />
            <SubheadTitle SubheadTitle='words from our food lovers' />
            <div className='imgDiv'>
                <IconReviewes img={Ellipse} name='Alex andrina' paragr='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
            </div>
        </div>
    )
}

export default ReviewsSection;