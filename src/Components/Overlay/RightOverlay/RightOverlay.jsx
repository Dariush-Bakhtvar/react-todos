import React from 'react';
import style from './RightOverlay.module.scss';
// import withActive from '../../Hoc/withActive';
const RightOverlay = ({ isActive, setActive }) => {
  return (
    <div className={style.RightOverlay}>
      <div className={`${style.Panel} ${isActive && style.fadeIn}`}>
        <h1>سلام</h1>
        <p>برنامه ی امروزت چیه؟ بریم کار هارو زمانبندی کنیم!؟</p>
        <button onClick={setActive}>بزن بریم </button>
      </div>
    </div>
  )
}

// export default withActive(RightOverlay);
export default RightOverlay;
