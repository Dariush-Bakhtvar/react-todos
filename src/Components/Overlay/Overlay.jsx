import React from 'react'
import style from './Overlay.module.scss';
import OverlayWrapper from './OverlayWrapper/OverlayWrapper';
import withActive from '../Hoc/withActive';
const Overlay = ({ isActive, setActive }) => {
  return (
    <section className={`${style.Overlay} ${isActive && style.ActiveOverlay}`}>
      <OverlayWrapper isActive={isActive} setActive={setActive} />
    </section>
  )
}

export default withActive(Overlay);
