import React from 'react'
import Chart from '../../Chart/Chart';
import style from './LeftOverlay.module.scss';
const LeftOverlay = ({ isActive, setActive }) => {
  return (
    <div className={`${style.LeftOverlay}`}>
      <div className={`${style.Panel} ${isActive && style.fadeIn}`}>
        <Chart />
        <button onClick={setActive}>وظایف</button>
      </div>
    </div>
  )
}

export default LeftOverlay
