import React from 'react'
import Icon from '../../component/icons/icon'
import './style.css'
import chef1 from '../../images/chef1.png'
import dish1 from '../../images/dish1.png'
import team from '../../images/team.png'
const IconsSection = () => {
    return (
        <div className='iconsSection'>
            <Icon img={dish1}
            num='250+' desc='Delicacy' />
            <Icon img={chef1}
                num='10+' desc='renowed chefs' />
            <Icon img={team}
                num='30+' desc='Members' />
        </div>
    )
}

export default IconsSection