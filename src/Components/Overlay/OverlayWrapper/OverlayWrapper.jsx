import React from 'react'
import RightOverlay from '../RightOverlay/RightOverlay';
import LeftOverlay from '../LeftOverlay/LeftOverlay';
import style from './OverlayWrapper.module.scss';
const OverlayWrapper = ({ isActive, setActive }) => {
  return (
    <div className={style.OverlayWrapper}>
      <RightOverlay isActive={isActive} setActive={setActive} />
      <LeftOverlay />
    </div>
  )
}

export default OverlayWrapper