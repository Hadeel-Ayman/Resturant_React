import React from 'react'
import './style.css'
function HeadTitle(props) {
  const { headTitle, style } = props;
  return (
    <h5 className='headTitle' style={style}>{headTitle}</h5>
  )
}

export default HeadTitle