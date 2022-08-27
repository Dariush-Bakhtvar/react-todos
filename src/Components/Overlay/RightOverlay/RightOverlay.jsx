import React from 'react';
import style from './RightOverlay.module.scss';
// import withActive from '../../Hoc/withActive';
const RightOverlay = ({ isActive, setActive }) => {
  return (
    <div className={style.RightOverlay}>
      <button onClick={setActive}>Add Task</button>
    </div>
  )
}

// export default withActive(RightOverlay);
export default RightOverlay;
