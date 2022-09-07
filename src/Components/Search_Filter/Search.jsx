import { CSSTransition } from 'react-transition-group'
import { useState } from 'react';
import style from './Search.module.scss';
import { MdManageAccounts } from 'react-icons/md';
import { BsUiChecks } from 'react-icons/bs'
import { IoMdTrash } from 'react-icons/io'
import '../../asset/Sass/modal.scss';
const Search = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={style.searchWrapper}>
      <div className={style.searchBox}>
        <input type="text" placeholder='جستجو...' />
        <span></span>
      </div>
      <ul className={style.manageTask}>
        <li onClick={() => setIsShow(!isShow)}>
          <span>مدیریت کارها</span>
          <MdManageAccounts />
          <CSSTransition
            classNames="modal"
            timeout={600}
            in={isShow}
            unmountOnExit
          >
            <ul className={style.subMenu}>
              <li>
                <span>انجام همه</span>
                <BsUiChecks />
              </li>
              <li>
                <span>حذف همه</span>
                <IoMdTrash />
              </li>
            </ul>
          </CSSTransition>
        </li>
      </ul>
    </div>
  )
}

export default Search
