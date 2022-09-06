import React from 'react'
import style from './Search.module.scss';
import { CgSearchLoading } from 'react-icons/cg';
import { MdManageAccounts } from 'react-icons/md';
const Search = () => {
  return (
    <div className={style.searchWrapper}>
      <div className={style.searchBox}>
        <input type="text" placeholder='جستجو' />
        <CgSearchLoading />
      </div>
      <ul className={style.manageTask}>
        <li>
          <span>مدیریت کارها</span>
          <MdManageAccounts />
          <ul className={style.subMenu}>
            <li>انجام همه</li>
            <li>حذف همه</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Search
