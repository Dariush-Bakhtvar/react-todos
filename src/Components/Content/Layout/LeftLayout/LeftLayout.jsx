import Search from '../../../Search_Filter/Search';
import Task from '../../../Task/Task';
import style from './LeftLayout.module.scss';
const LeftLayout = ({ isActive }) => {
  return (
    <section className={`${style.LeftLayout} ${isActive && style.fadeout}`}>
      <div className={style.leftWrapper}>
        <Search />
        <Task />
      </div>
    </section>
  )
}

export default LeftLayout