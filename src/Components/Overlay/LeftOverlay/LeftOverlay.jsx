import React from 'react'
import style from './LeftOverlay.module.scss';
const LeftOverlay = ({ isActive, setActive }) => {
  return (
    <div className={style.LeftOverlay}>
      <button onClick={setActive}>View Task</button>
    </div>
  )
}

export default LeftOverlay
