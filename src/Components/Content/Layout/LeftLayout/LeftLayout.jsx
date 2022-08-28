import React from 'react'
import style from './LeftLayout.module.scss';
const LeftLayout = ({ isActive }) => {
  return (
    <div className={`${style.LeftLayout} ${isActive && style.fadeout}`}>
      <div className={style.leftWrapper}>
        test
        <h1>سلام</h1>
      </div>
    </div>
  )
}

export default LeftLayout