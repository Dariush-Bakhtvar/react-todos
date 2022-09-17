import React from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { AiOutlineFieldTime } from 'react-icons/ai'
import style from './filterDate.module.scss';
const FilterDate = () => {
  return (
    <div className={style.filterDateWrapper}>
      <div className={style.filterDateBtn}>
        <AiOutlineFieldTime />
        <span>امروز</span>
        <BiCaretDown />
      </div>
      <ul className={style.filterDateMenu}>
        <li>
          <span>امروز</span>
          <span>0</span>
        </li>
        <div className={style.division}></div>
        <ul className={style.upComing}>
          <p>آینده</p>
        </ul>
      </ul>
    </div>
  )
}

export default FilterDate