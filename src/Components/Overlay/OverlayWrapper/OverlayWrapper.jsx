import React from 'react'
import RightOverlay from '../RightOverlay/RightOverlay';
import LeftOverlay from '../LeftOverlay/LeftOverlay';
import style from './OverlayWrapper.module.scss';
const OverlayWrapper = ({ isActive, setActive }) => {
  return (
    <div className={`${style.OverlayWrapper} ${isActive && style.activeWrapper}`}>
      <RightOverlay isActive={isActive} setActive={setActive} />
      <LeftOverlay isActive={isActive} setActive={setActive} />
    </div>
  )
}

export default OverlayWrapper