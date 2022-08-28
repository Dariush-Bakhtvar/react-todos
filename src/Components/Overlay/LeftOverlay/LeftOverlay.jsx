import React from 'react'
import style from './LeftOverlay.module.scss';
const LeftOverlay = ({ isActive, setActive }) => {
  return (
    <div className={`${style.LeftOverlay}`}>
      <div className={`${style.Panel} ${isActive && style.fadeIn}`}>
        <button onClick={setActive}>View Task</button>
      </div>
    </div>
  )
}

export default LeftOverlay
