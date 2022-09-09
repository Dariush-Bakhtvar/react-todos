import { CSSTransition } from 'react-transition-group'
import style from './Search.module.scss';
import { MdManageAccounts } from 'react-icons/md';
import { BsUiChecks } from 'react-icons/bs'
import { IoMdTrash } from 'react-icons/io'
import '../../asset/Sass/modal.scss';
import withActive from '../Hoc/withActive'
const Search = ({ isActive, setActive }) => {
  return (
    <div className={style.searchWrapper}>
      <div className={style.searchBox}>
        <input type="text" placeholder='جستجو...' />
        <span></span>
      </div>
      <ul className={style.manageTask}>
        <li onClick={setActive}>
          <span>مدیریت کارها</span>
          <MdManageAccounts />
          <CSSTransition
            classNames="modal"
            timeout={600}
            in={isActive}
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

export default withActive(Search)
