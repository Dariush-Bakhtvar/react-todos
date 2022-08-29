import React from 'react'
import style from './LeftOverlay.module.scss';
import { VscCircleFilled } from "react-icons/vsc";
import { GoBookmark } from "react-icons/go";
const LeftOverlay = ({ isActive, setActive }) => {
  return (
    <div className={`${style.LeftOverlay}`}>
      <div className={`${style.Panel} ${isActive && style.fadeIn}`}>
        <h1>شرح وظایف</h1>
        <ul className={style.tasksummery}>
          <li>
            <GoBookmark className={style.circle1} />
            <span> همه کارها</span>
            <span>0</span>
          </li>
          <li>
            <VscCircleFilled className={style.circle2} />
            <span>کسب و کار</span>
            <span>0</span>
          </li>
          <li>
            <VscCircleFilled className={style.circle3} />
            <span>شخصی</span>
            <span>0</span>
          </li>
          <li>
            <VscCircleFilled className={style.circle4} />
            <span>خانوادگی</span>
            <span>0</span>
          </li>
          <li>
            <VscCircleFilled className={style.circle5} />
            <span>کار</span>
            <span>0</span>
          </li>
        </ul>
        <button onClick={setActive}>وظایف</button>
      </div>
    </div>
  )
}

export default LeftOverlay
