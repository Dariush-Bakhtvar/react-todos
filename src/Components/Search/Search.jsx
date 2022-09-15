// import { CSSTransition } from 'react-transition-group'
import style from './Search.module.scss';
// import { MdManageAccounts } from 'react-icons/md';
// import { BsUiChecks } from 'react-icons/bs'
// import { IoMdTrash } from 'react-icons/io'
import '../../asset/Sass/modal.scss';
import withActive from '../Hoc/withActive'
import { useTodosAction } from '../Provider/TodoProvider';
import { useState } from 'react';
const Search = ({ isActive, setActive, Filter }) => {
  const dispatch = useTodosAction();
  const [search, setSearch] = useState("");
  const searchHandler = (e, isCheck = false) => {
    if (!Filter) {
      dispatch({ type: 'search', value: e.target.value, isCheck });
      setSearch(e.target.value);
    } else {
      isCheck = true;
      dispatch({ type: 'filter', event: Filter });
      dispatch({ type: 'search', event: e.target.value });
      setSearch(e.target.value);
    }
  }
  return (
    <div className={style.searchBox}>
      <input type="text" placeholder='جستجو...' onChange={searchHandler} value={search} />
      <span></span>
    </div>
    // <ul className={style.manageTask}>
    //   <li onClick={setActive}>
    //     <span>مدیریت کارها</span>
    //     <MdManageAccounts />
    //   </li>
    //   <CSSTransition
    //     classNames="modal"
    //     timeout={600}
    //     in={isActive}
    //     unmountOnExit
    //   >
    //     <ul className={style.subMenu}>
    //       <li onClick={() => dispatch({ type: 'doneAllTask' })}>
    //         <span>انجام همه</span>
    //         <BsUiChecks />
    //       </li>
    //       <li>
    //         <span onClick={() => dispatch({ type: 'removeAllTask' })}>حذف همه</span>
    //         <IoMdTrash />
    //       </li>
    //     </ul>
    //   </CSSTransition>
    // </ul>

  )
}

export default withActive(Search)
